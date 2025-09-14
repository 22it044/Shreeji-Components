import React, { useState, useEffect } from 'react';

type CursorType = 'default' | 'crosshair' | 'caliper' | 'ruler' | 'precision';

interface TechnicalCursorProps {
  initialType?: CursorType;
}

const TechnicalCursor: React.FC<TechnicalCursorProps> = ({ initialType = 'default' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>(initialType);
  const [clicking, setClicking] = useState(false);
  const [measuring, setMeasuring] = useState(false);
  const [measureStart, setMeasureStart] = useState({ x: 0, y: 0 });
  const [measureEnd, setMeasureEnd] = useState({ x: 0, y: 0 });
  const [isOverNavLink, setIsOverNavLink] = useState(false);

  // Update cursor position
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (measuring) {
        setMeasureEnd({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    
    const handleMouseDown = (e: MouseEvent) => {
      setClicking(true);
      
      if (cursorType === 'caliper' || cursorType === 'ruler') {
        setMeasuring(true);
        setMeasureStart({ x: e.clientX, y: e.clientY });
        setMeasureEnd({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleMouseUp = () => {
      setClicking(false);
      
      if (measuring) {
        // Keep measurement visible for a moment
        setTimeout(() => {
          setMeasuring(false);
        }, 2000);
      }
    };

    // Set up data attributes for cursor type switching
    const handleElementEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.getAttribute('data-cursor');
      
      // Check if we're over a navigation link
      const isNavLink = target.tagName === 'A' || 
                        target.tagName === 'BUTTON' || 
                        target.closest('a') || 
                        target.closest('button');
      
      setIsOverNavLink(!!isNavLink);
      
      // If over a navigation link, use precision cursor for better visibility
      if (isNavLink) {
        setCursorType('precision');
      }
      
      if (cursorAttr && ['default', 'crosshair', 'caliper', 'ruler', 'precision'].includes(cursorAttr)) {
        setCursorType(cursorAttr as CursorType);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementEnter);

    // Hide default cursor except when over navigation links
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementEnter);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, [cursorType, measuring, measureStart]);
  
  // Always show custom cursor, even over navigation links
  if (!visible) return null;

  // Calculate measurement distance
  const distance = Math.sqrt(
    Math.pow(measureEnd.x - measureStart.x, 2) + 
    Math.pow(measureEnd.y - measureStart.y, 2)
  ).toFixed(1);

  // Calculate angle for ruler
  const angle = Math.atan2(
    measureEnd.y - measureStart.y,
    measureEnd.x - measureStart.x
  ) * (180 / Math.PI);

  if (!visible) return null;

  return (
    <>
      {/* Custom cursor based on type */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: position.x, 
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {cursorType === 'default' && (
          <div className="relative">
            <div className="w-6 h-6 border-2 border-royal-sapphire rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-royal-sapphire rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-royal-sapphire rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
            {clicking && (
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-royal-sapphire rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50 animate-ping"></div>
            )}
          </div>
        )}

        {cursorType === 'crosshair' && (
          <div className="relative">
            <div className="w-12 h-12 border border-royal-sapphire rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-0 w-12 h-[1px] bg-royal-sapphire transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-12 bg-royal-sapphire transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-royal-sapphire transform -translate-x-1/2 -translate-y-1/2"></div>
            {clicking && (
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-royal-sapphire/30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            )}
          </div>
        )}

        {cursorType === 'caliper' && (
          <div className="relative">
            <div className="w-8 h-16 border border-royal-sapphire opacity-60 flex items-center justify-center">
              <div className="text-[8px] font-mono text-royal-sapphire">
                {clicking ? distance + 'px' : 'CALIPER'}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-royal-sapphire"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-royal-sapphire"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-royal-sapphire"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-royal-sapphire"></div>
          </div>
        )}

        {cursorType === 'ruler' && (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border border-royal-sapphire/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border border-royal-sapphire/60 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-royal-sapphire rounded-full" />
              </div>
            </div>
            <div className="absolute w-screen h-px bg-royal-sapphire/60 left-0" />
            <div className="absolute w-px h-screen bg-royal-sapphire/60 top-0" />
          </div>
        )}

        {cursorType === 'precision' && (
          <div className="relative">
            <div className="w-16 h-16 rounded-full border border-royal-sapphire/40 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-royal-sapphire/60 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-royal-sapphire/80 flex items-center justify-center">
                  <div className="w-2 h-2 bg-royal-sapphire rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 w-16 h-[1px] bg-royal-sapphire/40 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-16 bg-royal-sapphire/40 transform -translate-x-1/2"></div>
            {clicking && (
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-royal-sapphire/70 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            )}
          </div>
        )}
      </div>

      {/* Measurement visualization */}
      {measuring && (
        <div 
          className="fixed pointer-events-none z-40"
          style={{
            left: measureStart.x,
            top: measureStart.y,
            width: '1px',
            height: '1px'
          }}
        >
          {/* Measurement line */}
          <div 
            className="absolute bg-royal-sapphire/50 h-[1px] origin-left"
            style={{
              width: `${distance}px`,
              transform: `rotate(${angle}deg)`
            }}
          ></div>
          
          {/* Start point */}
          <div className="absolute w-2 h-2 bg-royal-sapphire rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* End point */}
          <div 
            className="absolute w-2 h-2 bg-royal-sapphire rounded-full"
            style={{
              left: measureEnd.x - measureStart.x,
              top: measureEnd.y - measureStart.y,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
          
          {/* Measurement text */}
          <div 
            className="absolute bg-dark/80 text-royal-sapphire text-[10px] font-mono px-1 py-0.5 whitespace-nowrap"
            style={{
              left: (measureEnd.x - measureStart.x) / 2,
              top: (measureEnd.y - measureStart.y) / 2,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {`${distance}px`}
          </div>
        </div>
      )}
    </>
  );
};

export default TechnicalCursor;
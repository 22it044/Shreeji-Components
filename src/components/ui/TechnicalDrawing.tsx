import React from 'react';

interface TechnicalDrawingProps {
  width?: number;
  height?: number;
  className?: string;
  showDimensions?: boolean;
  showGrid?: boolean;
  component?: 'gear' | 'valve' | 'connector' | 'custom';
  customPath?: string;
}

const TechnicalDrawing: React.FC<TechnicalDrawingProps> = ({
  width = 300,
  height = 300,
  className = '',
  showDimensions = true,
  showGrid = true,
  component = 'gear',
  customPath
}) => {
  // Generate SVG paths based on component type
  const getComponentPath = () => {
    switch (component) {
      case 'gear':
        return generateGearPath();
      case 'valve':
        return generateValvePath();
      case 'connector':
        return generateConnectorPath();
      case 'custom':
        return customPath || '';
      default:
        return generateGearPath();
    }
  };

  // Generate a gear technical drawing
  const generateGearPath = () => {
    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.min(width, height) * 0.4;
    const innerRadius = outerRadius * 0.7;
    const toothDepth = outerRadius * 0.15;
    const teethCount = 12;
    
    let path = `M ${centerX + outerRadius}, ${centerY} `;
    
    for (let i = 0; i < teethCount; i++) {
      const angle = (i / teethCount) * Math.PI * 2;
      const nextAngle = ((i + 1) / teethCount) * Math.PI * 2;
      
      const midAngle = (angle + nextAngle) / 2;
      
      const outerX1 = centerX + Math.cos(angle) * outerRadius;
      const outerY1 = centerY + Math.sin(angle) * outerRadius;
      
      const toothTipX = centerX + Math.cos(midAngle) * (outerRadius + toothDepth);
      const toothTipY = centerY + Math.sin(midAngle) * (outerRadius + toothDepth);
      
      const outerX2 = centerX + Math.cos(nextAngle) * outerRadius;
      const outerY2 = centerY + Math.sin(nextAngle) * outerRadius;
      
      path += `L ${toothTipX}, ${toothTipY} L ${outerX2}, ${outerY2} `;
    }
    
    path += 'Z ';
    
    // Add inner circle
    path += `M ${centerX + innerRadius}, ${centerY} `;
    path += `A ${innerRadius} ${innerRadius} 0 1 0 ${centerX - innerRadius} ${centerY} `;
    path += `A ${innerRadius} ${innerRadius} 0 1 0 ${centerX + innerRadius} ${centerY} `;
    
    // Add center hole
    const centerHoleRadius = innerRadius * 0.3;
    path += `M ${centerX + centerHoleRadius}, ${centerY} `;
    path += `A ${centerHoleRadius} ${centerHoleRadius} 0 1 0 ${centerX - centerHoleRadius} ${centerY} `;
    path += `A ${centerHoleRadius} ${centerHoleRadius} 0 1 0 ${centerX + centerHoleRadius} ${centerY} `;
    
    return path;
  };

  // Generate a valve technical drawing
  const generateValvePath = () => {
    const centerX = width / 2;
    const centerY = height / 2;
    const bodyWidth = width * 0.6;
    const bodyHeight = height * 0.3;
    const stemWidth = width * 0.1;
    const stemHeight = height * 0.4;
    
    let path = '';
    
    // Valve body
    path += `M ${centerX - bodyWidth/2}, ${centerY} `;
    path += `L ${centerX - bodyWidth/2}, ${centerY + bodyHeight/2} `;
    path += `L ${centerX + bodyWidth/2}, ${centerY + bodyHeight/2} `;
    path += `L ${centerX + bodyWidth/2}, ${centerY} `;
    
    // Valve stem
    path += `M ${centerX - stemWidth/2}, ${centerY} `;
    path += `L ${centerX - stemWidth/2}, ${centerY - stemHeight} `;
    path += `L ${centerX + stemWidth/2}, ${centerY - stemHeight} `;
    path += `L ${centerX + stemWidth/2}, ${centerY} `;
    
    // Valve handle
    const handleWidth = bodyWidth * 0.7;
    path += `M ${centerX - handleWidth/2}, ${centerY - stemHeight} `;
    path += `L ${centerX + handleWidth/2}, ${centerY - stemHeight} `;
    
    // Flow channels
    const channelWidth = bodyWidth * 0.8;
    path += `M ${centerX - channelWidth/2}, ${centerY + bodyHeight/2} `;
    path += `L ${centerX - channelWidth/2}, ${centerY + bodyHeight} `;
    path += `M ${centerX + channelWidth/2}, ${centerY + bodyHeight/2} `;
    path += `L ${centerX + channelWidth/2}, ${centerY + bodyHeight} `;
    
    return path;
  };

  // Generate a connector technical drawing
  const generateConnectorPath = () => {
    const centerX = width / 2;
    const centerY = height / 2;
    const bodyWidth = width * 0.6;
    const bodyHeight = height * 0.4;
    const threadDepth = width * 0.05;
    const threadCount = 8;
    
    let path = '';
    
    // Connector body
    path += `M ${centerX - bodyWidth/2}, ${centerY - bodyHeight/2} `;
    path += `L ${centerX + bodyWidth/2}, ${centerY - bodyHeight/2} `;
    path += `L ${centerX + bodyWidth/2}, ${centerY + bodyHeight/2} `;
    path += `L ${centerX - bodyWidth/2}, ${centerY + bodyHeight/2} `;
    path += `Z `;
    
    // Threads on left side
    for (let i = 0; i < threadCount; i++) {
      const y = centerY - bodyHeight/2 + (bodyHeight / threadCount) * i;
      path += `M ${centerX - bodyWidth/2}, ${y} `;
      path += `L ${centerX - bodyWidth/2 - threadDepth}, ${y + (bodyHeight / threadCount) / 2} `;
      path += `L ${centerX - bodyWidth/2}, ${y + (bodyHeight / threadCount)} `;
    }
    
    // Threads on right side
    for (let i = 0; i < threadCount; i++) {
      const y = centerY - bodyHeight/2 + (bodyHeight / threadCount) * i;
      path += `M ${centerX + bodyWidth/2}, ${y} `;
      path += `L ${centerX + bodyWidth/2 + threadDepth}, ${y + (bodyHeight / threadCount) / 2} `;
      path += `L ${centerX + bodyWidth/2}, ${y + (bodyHeight / threadCount)} `;
    }
    
    // Center hole
    const holeRadius = bodyWidth * 0.15;
    path += `M ${centerX + holeRadius}, ${centerY} `;
    path += `A ${holeRadius} ${holeRadius} 0 1 0 ${centerX - holeRadius} ${centerY} `;
    path += `A ${holeRadius} ${holeRadius} 0 1 0 ${centerX + holeRadius} ${centerY} `;
    
    return path;
  };

  // Generate dimensions for the drawing
  const generateDimensions = () => {
    const elements = [];
    const centerX = width / 2;
    const centerY = height / 2;
    
    if (component === 'gear') {
      const outerRadius = Math.min(width, height) * 0.4;
      const innerRadius = outerRadius * 0.7;
      const centerHoleRadius = innerRadius * 0.3;
      
      // Outer diameter dimension
      elements.push(
        <g key="outer-dim" className="text-royal-sapphire">
          <line x1={centerX} y1={centerY - outerRadius - 10} x2={centerX} y2={centerY - outerRadius - 30} strokeWidth="1" />
          <line x1={centerX} y1={centerY + outerRadius + 10} x2={centerX} y2={centerY + outerRadius + 30} strokeWidth="1" />
          <line x1={centerX} y1={centerY - outerRadius - 20} x2={centerX} y2={centerY + outerRadius + 20} strokeWidth="1" strokeDasharray="4 2" />
          <text x={centerX + 10} y={centerY} fontSize="10" textAnchor="start" dominantBaseline="middle">{`Ø${(outerRadius * 2).toFixed(1)}`}</text>
        </g>
      );
      
      // Inner hole dimension
      elements.push(
        <g key="inner-dim" className="text-royal-sapphire">
          <line x1={centerX - centerHoleRadius} y1={centerY - 5} x2={centerX - centerHoleRadius - 20} y2={centerY - 5} strokeWidth="1" />
          <line x1={centerX + centerHoleRadius} y1={centerY - 5} x2={centerX + centerHoleRadius + 20} y2={centerY - 5} strokeWidth="1" />
          <line x1={centerX - centerHoleRadius - 10} y1={centerY - 5} x2={centerX + centerHoleRadius + 10} y2={centerY - 5} strokeWidth="1" strokeDasharray="4 2" />
          <text x={centerX} y={centerY - 15} fontSize="10" textAnchor="middle">{`Ø${(centerHoleRadius * 2).toFixed(1)}`}</text>
        </g>
      );
    } else if (component === 'valve' || component === 'connector') {
      const bodyWidth = width * 0.6;
      const bodyHeight = component === 'valve' ? height * 0.3 : height * 0.4;
      
      // Width dimension
      elements.push(
        <g key="width-dim" className="text-royal-sapphire">
          <line x1={centerX - bodyWidth/2} y1={centerY + bodyHeight/2 + 20} x2={centerX - bodyWidth/2} y2={centerY + bodyHeight/2 + 40} strokeWidth="1" />
          <line x1={centerX + bodyWidth/2} y1={centerY + bodyHeight/2 + 20} x2={centerX + bodyWidth/2} y2={centerY + bodyHeight/2 + 40} strokeWidth="1" />
          <line x1={centerX - bodyWidth/2} y1={centerY + bodyHeight/2 + 30} x2={centerX + bodyWidth/2} y2={centerY + bodyHeight/2 + 30} strokeWidth="1" strokeDasharray="4 2" />
          <text x={centerX} y={centerY + bodyHeight/2 + 45} fontSize="10" textAnchor="middle">{`${bodyWidth.toFixed(1)}`}</text>
        </g>
      );
      
      // Height dimension
      elements.push(
        <g key="height-dim" className="text-royal-sapphire">
          <line x1={centerX - bodyWidth/2 - 20} y1={centerY - bodyHeight/2} x2={centerX - bodyWidth/2 - 40} y2={centerY - bodyHeight/2} strokeWidth="1" />
          <line x1={centerX - bodyWidth/2 - 20} y1={centerY + bodyHeight/2} x2={centerX - bodyWidth/2 - 40} y2={centerY + bodyHeight/2} strokeWidth="1" />
          <line x1={centerX - bodyWidth/2 - 30} y1={centerY - bodyHeight/2} x2={centerX - bodyWidth/2 - 30} y2={centerY + bodyHeight/2} strokeWidth="1" strokeDasharray="4 2" />
          <text x={centerX - bodyWidth/2 - 45} y={centerY} fontSize="10" textAnchor="end" dominantBaseline="middle">{`${bodyHeight.toFixed(1)}`}</text>
        </g>
      );
    }
    
    return elements;
  };

  return (
    <div 
      className={`relative border-2 border-royal-sapphire/50 bg-dark/80 ${className}`}
      style={{ width, height }}
    >
      {/* Technical drawing */}
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="absolute inset-0">
        {/* Grid */}
        {showGrid && (
          <g className="text-royal-sapphire/10">
            {/* Horizontal grid lines */}
            {[...Array(10)].map((_, i) => (
              <line 
                key={`h-${i}`}
                x1="0"
                y1={height * (i + 1) / 10}
                x2={width}
                y2={height * (i + 1) / 10}
                strokeWidth="1"
              />
            ))}
            
            {/* Vertical grid lines */}
            {[...Array(10)].map((_, i) => (
              <line 
                key={`v-${i}`}
                x1={width * (i + 1) / 10}
                y1="0"
                x2={width * (i + 1) / 10}
                y2={height}
                strokeWidth="1"
              />
            ))}
          </g>
        )}
        
        {/* Component drawing */}
        <g className="text-brass stroke-current fill-none">
          <path d={getComponentPath()} strokeWidth="2" />
        </g>
        
        {/* Center lines */}
        <g className="text-royal-sapphire/30 stroke-current">
          <line x1={width/2} y1="0" x2={width/2} y2={height} strokeWidth="1" strokeDasharray="5 3" />
          <line x1="0" y1={height/2} x2={width} y2={height/2} strokeWidth="1" strokeDasharray="5 3" />
        </g>
        
        {/* Dimensions */}
        {showDimensions && (
          <g className="text-royal-sapphire/70 stroke-current fill-current">
            {generateDimensions()}
          </g>
        )}
      </svg>
      
      {/* Technical corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-royal-sapphire/50"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-royal-sapphire/50"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-royal-sapphire/50"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-royal-sapphire/50"></div>
      
      {/* Technical ID */}
      <div className="absolute top-2 right-2 text-[8px] font-mono text-royal-sapphire/70">{`DWG-${component.toUpperCase()}-001`}</div>
      
      {/* Technical specifications */}
      <div className="absolute bottom-2 left-2 text-[8px] font-mono text-royal-sapphire/70">
        {component === 'gear' && 'MATERIAL: C36000 BRASS'}
        {component === 'valve' && 'PRESSURE: 10 BAR MAX'}
        {component === 'connector' && 'THREAD: M10x1.5'}
      </div>
    </div>
  );
};

export default TechnicalDrawing;
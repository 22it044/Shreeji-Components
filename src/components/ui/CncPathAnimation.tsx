import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CncPathAnimationProps {
  width?: number;
  height?: number;
  pathColor?: string;
  toolColor?: string;
  speed?: number;
  className?: string;
}

const CncPathAnimation: React.FC<CncPathAnimationProps> = ({
  width = 200,
  height = 200,
  pathColor = '#00D9FF',
  toolColor = '#FF073A',
  speed = 5,
  className = ''
}) => {
  // Define the CNC path points
  const [pathPoints, setPathPoints] = useState<[number, number][]>([]);
  const [currentPoint, setCurrentPoint] = useState<number>(0);
  const [pathLength, setPathLength] = useState<number>(0);
  
  // Generate a CNC toolpath
  useEffect(() => {
    // Create a complex machining path
    const generatePath = () => {
      const points: [number, number][] = [];
      
      // Starting point
      points.push([10, 10]);
      
      // Outer rectangle
      points.push([width - 10, 10]);
      points.push([width - 10, height - 10]);
      points.push([10, height - 10]);
      points.push([10, 20]);
      
      // Inner details - horizontal lines
      const lineCount = 8;
      const lineSpacing = (height - 40) / lineCount;
      
      for (let i = 0; i < lineCount; i++) {
        const y = 20 + i * lineSpacing;
        if (i % 2 === 0) {
          // Left to right
          points.push([20, y]);
          points.push([width - 20, y]);
        } else {
          // Right to left
          points.push([width - 20, y]);
          points.push([20, y]);
        }
      }
      
      // Center circular pattern
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 4;
      
      points.push([centerX, centerY - radius]);
      
      const segments = 16;
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        points.push([
          centerX + Math.sin(angle) * radius,
          centerY - Math.cos(angle) * radius
        ]);
      }
      
      // Final position - return to start
      points.push([10, 10]);
      
      return points;
    };
    
    const points = generatePath();
    setPathPoints(points);
    setPathLength(points.length);
  }, [width, height]);
  
  // Animate the CNC tool along the path
  useEffect(() => {
    if (pathPoints.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentPoint((prev) => (prev + 1) % pathLength);
    }, 1000 / speed);
    
    return () => clearInterval(interval);
  }, [pathPoints, pathLength, speed]);
  
  // Convert points to SVG path
  const svgPath = pathPoints.length > 0 
    ? `M ${pathPoints[0][0]} ${pathPoints[0][1]} ` + 
      pathPoints.slice(1).map(point => `L ${point[0]} ${point[1]}`).join(' ')
    : '';
  
  // Current tool position
  const toolPosition = pathPoints[currentPoint] || [0, 0];
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-royal-sapphire/10"></div>
        ))}
      </div>
      
      {/* SVG Path */}
      <svg className="absolute inset-0 w-full h-full">
        <path
          d={svgPath}
          fill="none"
          stroke={pathColor}
          strokeWidth="1"
          strokeDasharray="4 2"
          strokeOpacity="0.6"
        />
        
        {/* Completed path */}
        {currentPoint > 0 && (
          <path
            d={
              `M ${pathPoints[0][0]} ${pathPoints[0][1]} ` + 
              pathPoints.slice(1, currentPoint + 1).map(point => `L ${point[0]} ${point[1]}`).join(' ')
            }
            fill="none"
            stroke={pathColor}
            strokeWidth="2"
            strokeOpacity="0.8"
          />
        )}
      </svg>
      
      {/* CNC Tool */}
      <motion.div
        className="absolute w-3 h-3 rounded-full shadow-glow-red z-10"
        style={{
          backgroundColor: toolColor,
          left: toolPosition[0],
          top: toolPosition[1],
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          x: [0, 0, 0],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Tool path indicator */}
      <div className="absolute bottom-2 left-2 flex items-center">
        <div className="w-2 h-2 rounded-full bg-royal-sapphire mr-1"></div>
        <span className="text-[8px] font-mono text-royal-sapphire">
          {`X:${Math.round(toolPosition[0])} Y:${Math.round(toolPosition[1])}`}
        </span>
      </div>
      
      {/* Technical corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-royal-sapphire/50"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-royal-sapphire/50"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-royal-sapphire/50"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-royal-sapphire/50"></div>
    </div>
  );
};

export default CncPathAnimation;
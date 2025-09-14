import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
}

interface MetalShavingsProps {
  count?: number;
  originX?: number;
  originY?: number;
  spread?: number;
  colors?: string[];
}

const MetalShavings: React.FC<MetalShavingsProps> = ({
  count = 20,
  originX = 50,
  originY = 50,
  spread = 100,
  colors = ['#B8860B', '#CD7F32', '#DAA520', '#FFC125']
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 6 + 2; // 2-8px
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      const distance = Math.random() * spread; // Random distance within spread
      
      // Calculate position based on angle and distance from origin
      const x = originX + Math.cos(angle) * distance;
      const y = originY + Math.sin(angle) * distance;
      
      newParticles.push({
        id: i,
        x,
        y,
        size,
        rotation: Math.random() * 720 - 360, // -360 to 360 degrees
        duration: Math.random() * 2 + 1, // 1-3 seconds
        delay: Math.random() * 0.5, // 0-0.5 second delay
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);
  }, [count, originX, originY, spread, colors]);

  return (
    <div className="absolute pointer-events-none" style={{ left: `${originX}%`, top: `${originY}%` }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size * (Math.random() * 3 + 1), // Varied height for shaving effect
            backgroundColor: particle.color,
            boxShadow: `0 0 2px ${particle.color}`,
            left: 0,
            top: 0,
            transform: `translate(-50%, -50%)`,
            zIndex: 10
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            x: particle.x - originX,
            y: particle.y - originY,
            rotate: particle.rotation,
            opacity: [0, 1, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
            times: [0, 0.1, 0.8, 1]
          }}
        />
      ))}
    </div>
  );
};

export default MetalShavings;
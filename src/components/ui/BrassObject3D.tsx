import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BrassObject3D = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main container with perspective */}
      <div className="absolute inset-0 perspective-1000">
        {/* Rotating brass gear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.8,
            rotateY: isVisible ? 360 : 0
          }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity,
            delay: 0.2
          }}
          className="absolute right-[20%] top-[30%] w-40 h-40"
        >
          <div className="relative w-full h-full">
            {/* Main gear body */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8d568] to-[#d4af37] shadow-[0_0_15px_rgba(248,213,104,0.5)] transform-gpu">
              {/* Gear teeth */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 360;
                return (
                  <div 
                    key={i} 
                    className="absolute w-6 h-10 bg-gradient-to-br from-[#f8d568] to-[#d4af37] shadow-md"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${angle}deg) translate(-50%, -50%) translateX(20px)`
                    }}
                  />
                );
              })}
              {/* Center hole */}
              <div className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-slate-800 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Floating brass hex nut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? [0, -10, 0] : 20
          }}
          transition={{ 
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            },
            opacity: { duration: 1 },
            delay: 0.5
          }}
          className="absolute right-[40%] top-[20%] w-24 h-24"
        >
          <div className="relative w-full h-full">
            {/* Hex nut body */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8d568] to-[#d4af37] shadow-[0_0_15px_rgba(248,213,104,0.3)]" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              {/* Center hole */}
              <div className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-slate-800 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Brass pipe */}
        <motion.div
          initial={{ opacity: 0, rotateZ: 45, x: -20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            rotateZ: isVisible ? 45 : 30,
            x: isVisible ? 0 : -20
          }}
          transition={{ 
            duration: 1.5,
            delay: 0.8
          }}
          className="absolute right-[60%] bottom-[40%] w-48 h-12"
        >
          <div className="relative w-full h-full">
            {/* Pipe body */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8d568] to-[#d4af37] rounded-full shadow-[0_0_15px_rgba(248,213,104,0.3)]">
              {/* Pipe rings */}
              <div className="absolute left-0 top-0 w-full h-full flex justify-between items-center px-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-full bg-[#f8d568] opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small floating brass components */}
        {Array.from({ length: 5 }).map((_, i) => {
          const size = 10 + Math.random() * 20;
          const delay = 0.2 + Math.random() * 1;
          const duration = 3 + Math.random() * 5;
          const posX = 20 + Math.random() * 60;
          const posY = 20 + Math.random() * 60;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: isVisible ? 0.8 : 0, 
                scale: isVisible ? 1 : 0,
                rotate: isVisible ? 360 : 0
              }}
              transition={{ 
                duration: duration, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay
              }}
              className="absolute"
              style={{
                right: `${posX}%`,
                top: `${posY}%`,
                width: `${size}px`,
                height: `${size}px`
              }}
            >
              <div className="w-full h-full rounded-md bg-gradient-to-br from-[#f8d568] to-[#d4af37] shadow-[0_0_10px_rgba(248,213,104,0.4)]" />
            </motion.div>
          );
        })}

        {/* Light effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/4 top-1/4 w-40 h-40 rounded-full bg-[#f8d568] opacity-10 blur-3xl" />
          <div className="absolute right-1/2 bottom-1/3 w-60 h-60 rounded-full bg-[#f8d568] opacity-5 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default BrassObject3D;
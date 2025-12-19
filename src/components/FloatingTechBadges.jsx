// components/FloatingTechBadges.jsx (Optional separate component)
import React from 'react';
import { motion } from 'framer-motion';

const FloatingTechBadges = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          className="absolute"
          style={{
            left: `${20 + (index % 3) * 30}%`,
            top: `${20 + Math.floor(index / 3) * 30}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: index % 2 === 0 ? [0, 5, -5, 0] : [0, -5, 5, 0]
          }}
          transition={{
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div 
            className={`p-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 ${
              activeIndex === index
                ? 'ring-2 ring-[#f00330] shadow-2xl'
                : 'ring-1 ring-gray-200/20 dark:ring-gray-700/30'
            }`}
            style={{ 
              backgroundColor: `${item.color}10`,
              color: activeIndex === index ? item.color : '#666'
            }}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechBadges;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code2, Cpu, Rocket, Shield } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(0);

  // Animate counter
  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // 2 seconds
    const incrementTime = duration / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCounter(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  // Floating tech icons
  const floatingIcons = [
    { Icon: Code2, x: '15%', y: '20%', delay: 0 },
    { Icon: Cpu, x: '85%', y: '30%', delay: 0.2 },
    { Icon: Rocket, x: '25%', y: '75%', delay: 0.4 },
    { Icon: Shield, x: '75%', y: '65%', delay: 0.6 },
  ];

  // Stats with animated numbers
  const stats = [
    { label: 'Projects Delivered', value: '50+', suffix: '+', icon: Zap },
    { label: 'Client Satisfaction', value: '100', suffix: '%', icon: Sparkles },
    { label: 'Code Quality Score', value: '98', suffix: '%', icon: Code2 },
    { label: 'On-Time Delivery', value: '95', suffix: '%', icon: Rocket },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const gradientVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hover: { 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative min-h-[140vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <motion.div 
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900"
      />
      
      {/* Dynamic gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-gradient-rotate" />
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-l from-primary/3 via-transparent to-primary/3 animate-gradient-rotate-reverse" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ left: x, top: y }}
          className="absolute text-primary/20 dark:text-primary/10"
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Studio Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800"
          >
            <motion.div
              whileHover="hover"
              variants={iconVariants}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wider">
              FOUNDER-LED TECH STUDIO • EST 2025
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="relative">
            
            <motion.h1 
              variants={itemVariants}
              className="font-hirosaki text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9]"
            >
              <span className="block text-gray-900 dark:text-white">TRANSFORM</span>
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary-dark">
                  JUNK TO CODE
                </span>
                <motion.span 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </span>
            </motion.h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light tracking-tight pt-4"
          >
            We engineer <span className="font-bold text-primary">premium software solutions</span> for 
            startups, enterprises, and technical leaders who value substance over marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-all duration-300 overflow-hidden hover-lift inline-flex items-center space-x-3 shadow-lg shadow-primary/25"
            >
              {/* Button glow effect */}
              {isHovered && (
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                />
              )}
              <span className="relative text-lg">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#f00330',
                backgroundColor: 'rgba(240, 3, 48, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-gray-300 dark:border-gray-700 font-medium rounded-2xl hover:border-primary dark:hover:border-primary transition-all duration-300 hover-lift group"
            >
              <span className="text-lg">View Our Work</span>
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-6 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group">
                  <stat.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {index === 0 ? stat.value : (
                    <span>{counter}{stat.suffix}</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
              TRUSTED BY ENGINEERING TEAMS AT
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {['TechScale', 'InnovateLabs', 'StartupXYZ', 'EnterpriseCorp', 'DataFlow'].map((company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 tracking-tight"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="relative group">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-4 bg-primary rounded-full mt-2 group-hover:scale-x-150 transition-transform"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Explore our work
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
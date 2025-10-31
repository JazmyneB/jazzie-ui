import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateX: [0, 2, 0, -2, 0],
      rotateY: [0, -2, 0, 2, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [controls]);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <main className="hero" onMouseMove={handleMouseMove}>
      <motion.div
        className="floating-shape shape-1"
        animate={{
          x: mousePos.x * 1.5,
          y: mousePos.y * 1.5,
          rotate: mousePos.x * 5,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      />
      <motion.div
        className="floating-shape shape-2"
        animate={{
          x: mousePos.x * -1.2,
          y: mousePos.y * -1.2,
          rotate: mousePos.x * -4,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      />

      <div className="glass-panel" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      >
        <motion.h1
          className="hero-title"
          animate={controls}
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
            background:
              'linear-gradient(270deg, #af0956, #d60377, #e5989b, #fde2e4, #af0956)',
            backgroundSize: '600% 600%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 10s ease infinite',
          }}
        >
          Welcome to JazzieUI
        </motion.h1>
        <p className="hero-subtitle">
          Where soft girl energy meets sleek design.<br /> Get Jazzie with JazzieUI
        </p>
        <motion.button
          className="cta-button"
          whileHover={{
            scale: 1.1,
            boxShadow:
              '0 0 15px var(--color-primary), 0 0 25px var(--color-primary-hover)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Components
        </motion.button>
      </motion.div>
    </main>
  );
}

export default Hero;

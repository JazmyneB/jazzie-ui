import { motion } from "framer-motion";
import RoboRose from "../../assets/RoboRose.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* 🌈 Animated Background Overlay */}
      <div className="hero-bg"></div>

      {/* 🌸 Floating Left RoboRose */}
      <motion.div
        className="hero-image image-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: -2 }}
      >
        <motion.img
          src={RoboRose}
          alt="Robo Rose Left"
          initial={{ rotate: -15 }}
          animate={{
            y: [0, -20, 0],
            transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
        />
      </motion.div>

      {/* 🌸 Main Hero Content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to <span className="brand">JazzieUI</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Soft Girl ✨ meets Boss Tech Energy 💻
        </motion.p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--color-primary)" }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Components
        </motion.button>
      </div>

      {/* 💎 Floating Right RoboRose */}
      <motion.div
        className="hero-image image-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.08, rotate: 4 }}
      >
        <motion.img
          src={RoboRose}
          alt="Robo Rose Right"
          animate={{
            y: [0, 25, 0],
            transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
        />
      </motion.div>
    </section>
  );
}

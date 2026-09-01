"use client";

import { motion } from "framer-motion";
import GradientWaves from "./GradientWaves";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <GradientWaves
          horizonColor="#2e054a"
          waveColor="#5b1f9c"
          crestColor="#aa73ff"
          opacity={0.8}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl pt-8">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-1.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold tracking-wide">HELLO</span>
            <span className="text-sm text-white/90 pr-3 font-medium">Welcome to my portfolio</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-sm">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3c4ff] to-[#fff]">Ajay R.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Aspiring software engineer passionate about Python, AI & ML — eager to build real-world solutions and grow with a progressive team.
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

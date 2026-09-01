"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Github } from "./icons";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-accent">Ajay R</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Python Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Aspiring software engineer passionate about Python, AI & ML — eager to build real-world solutions and grow with a progressive team.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-card border text-card-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
              <a href="https://github.com/ajaybharathiraja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:ajaybharathiraja@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:6369180490" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Phone">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div 
            className="flex-1 w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium px-4 text-center">
                Replace with headshot/photo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

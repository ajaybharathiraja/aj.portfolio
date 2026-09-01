"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Github } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:ajaybharathiraja@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  ajaybharathiraja@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:6369180490" className="text-muted-foreground hover:text-foreground transition-colors">
                  6369180490
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent mt-1">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">GitHub</h3>
                <a href="https://github.com/ajaybharathiraja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  github.com/ajaybharathiraja
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="flex-1 space-y-4 bg-card border p-8 rounded-2xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Note: Add Formspree or Resend endpoint to action attribute below
            action="mailto:ajaybharathiraja@gmail.com" 
            method="POST" 
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow" 
                placeholder="John Doe"
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow" 
                placeholder="john@example.com"
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none" 
                placeholder="How can we work together?"
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

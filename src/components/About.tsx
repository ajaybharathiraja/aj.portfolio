"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            About <span className="text-accent">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a final-year B.E. Computer Science Engineering student specializing in AI & Machine Learning at Sethu Institute of Technology (2022–2026), currently maintaining a CGPA of 8.0.
            </p>
            <p>
              I am currently working as an App Developer Intern at Daft Labs, where I contribute to mobile app UI features, navigation, debugging, testing, and overall performance improvements. My core passions lie in Python development, data-driven applications, and applied AI/ML.
            </p>
            <p>
              I am a strong believer in continuous learning, which is backed by my multiple certifications and hands-on projects. I thrive in dynamic environments and am always looking for opportunities to grow and make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

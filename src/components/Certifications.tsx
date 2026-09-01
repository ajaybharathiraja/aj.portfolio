"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Innovel IT Training, Madurai",
    date: "May 2026 – July 2026",
  },
  {
    title: "Cloud Computing",
    issuer: "Elite Certification, NPTEL (67%)",
    date: "Jul – Oct 2024",
  },
  {
    title: "Introduction to Industry 4.0 & Industrial IoT",
    issuer: "Elite Certification, NPTEL (64%)",
    date: "Jan – Apr 2025",
  },
  {
    title: "Power BI Dashboard Certification",
    issuer: "Novi Tech R&D Pvt. Ltd, Coimbatore",
    date: "30/03/2025",
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Certifications & <span className="text-accent">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-16 h-16 text-accent" />
              </div>
              <div className="relative z-10">
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2 leading-tight">{cert.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="text-xs font-semibold px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md w-fit">
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

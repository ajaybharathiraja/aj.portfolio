"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "App Developer Intern",
    company: "Daft Labs",
    date: "Current",
    type: "Internship",
    description: "Contributing to mobile app development, UI features, navigation, debugging, testing, and performance improvements.",
  },
  {
    role: "Workshop: Angular Framework",
    company: "Amizth Techno Solutions Pvt. Ltd, Madurai",
    date: "29/01/2024 – 05/02/2024",
    type: "Workshop",
    description: "Participated in an intensive workshop focusing on the Angular framework.",
  },
  {
    role: "Workshop: Robotics Training",
    company: "Zetspire Technologies Pvt. Ltd",
    date: "08/01/2025 – 29/01/2025",
    type: "Workshop",
    description: "Hands-on robotics training covering fundamental and advanced concepts.",
  },
  {
    role: "Bootcamp: Power BI",
    company: "Navitech R&D Pvt. Ltd",
    date: "30/03/2025",
    type: "Bootcamp",
    description: "Intensive bootcamp focused on data visualization and dashboard creation using Power BI.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Experience & <span className="text-accent">Training</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/10 p-4 rounded-xl shrink-0">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <div className="text-accent font-medium mb-4 flex items-center gap-2">
                  {exp.company} 
                  <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full"></span>
                  <span className="text-muted-foreground">{exp.type}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

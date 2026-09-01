"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Sethu Institute of Technology",
    degree: "B.E. Computer Science Engineering (AI & Machine Learning)",
    period: "2022–2026",
    score: "CGPA 8.0",
  },
  {
    institution: "Keren Matriculation Higher Secondary School",
    degree: "HSC",
    period: "2022",
    score: "75%",
  },
  {
    institution: "Keren Matriculation Higher Secondary School",
    degree: "SSLC",
    period: "2020",
    score: "67.8%",
  }
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            <span className="text-accent">Education</span>
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="w-2 h-2 bg-background rounded-full"></span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm text-card-foreground">
                <div className="flex flex-col mb-1">
                  <span className="text-accent font-semibold text-sm mb-1">{item.period}</span>
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                </div>
                <div className="text-muted-foreground font-medium mb-2">{item.institution}</div>
                <div className="text-sm px-3 py-1 bg-muted w-fit rounded-md font-semibold">{item.score}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

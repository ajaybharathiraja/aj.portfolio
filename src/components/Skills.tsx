"use client";

import { motion } from "framer-motion";

const skillsData = [
  { category: "Programming", items: ["Python"] },
  { category: "Database", items: ["Oracle SQL"] },
  { category: "Data Visualization", items: ["Power BI"] },
  { category: "AI & ML Tools", items: ["ChatGPT", "Gemini", "GitHub Copilot", "Claude"] },
  { 
    category: "Key Strengths", 
    items: [
      "Effective Communication", 
      "Critical & Strategic Thinking", 
      "Strong Analytical Abilities", 
      "Fast Learner with Growth Mindset", 
      "Highly Adaptable & Flexible", 
      "Ability to Foster a Positive Work Environment"
    ] 
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            My <span className="text-accent">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent font-medium rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

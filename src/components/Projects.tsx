"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

const projects = [
  {
    title: "Employee Payroll Management System",
    description: "Developed a Python-based desktop application with a PyQt GUI to manage employee records and automate payroll calculations, using CSV-based storage for persistent data handling.",
    tags: ["Python", "PyQt", "CSV", "Desktop App"],
  },
  {
    title: "Smart Financial Forecasting",
    description: "Built a machine learning-based application to forecast NIFTY 50 stock market trends using historical data, with SQL database integration and a Python web app for visualization and analysis.",
    tags: ["Python", "Machine Learning", "SQL", "Data Visualization"],
  },
  {
    title: "AI-Powered Data Extraction and Query System",
    description: "Built a full-stack RAG (Retrieval-Augmented Generation) application with FastAPI and Streamlit that extracts text from URLs, images (OCR), and PDFs, embeds it using Sentence Transformers, stores vectors in ChromaDB, and generates grounded answers to natural language queries via LLM APIs.",
    tags: ["Python", "FastAPI", "Streamlit", "RAG", "LLM", "ChromaDB", "OCR"],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted flex items-center justify-center p-6 text-center border-b">
                <span className="text-muted-foreground text-sm font-medium">Image/Icon Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

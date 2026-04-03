

import React from "react";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "House Price Prediction",
    description: "Regression | Predictive Analytics | Model Optimization",
    github: "https://github.com/Charu-080602/house-price-prediction",
    live: "https://yourliveproject1.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Student Performance Prediction System",
    description: "Classification | Supervised Learning",
    github: "https://github.com/Charu-080602/portfolio",
    live: "https://yourliveproject2.com",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Salary Prediction",
    description: "Regression | Feature Engineering",
    github: "",
    live: "https://yourliveproject3.com",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real Estate Price Forecasting & Clustering",
    description: "Predictive | Unsupervised Learning",
    github: "",
    live: "https://yourliveproject4.com",
    color: "from-yellow-500 to-orange-500",
  },
];





export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>

      <div className="grid md:grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className={`h-40 bg-gradient-to-r ${project.color}`}></div>
            <div className="p-6 flex flex-col justify-between h-52">
              <div>
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-lg hover:bg-cyan-500 hover:text-white transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
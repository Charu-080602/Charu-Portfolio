import React, { useState } from "react";

const skillData = {
  AI: ["Deep learning", "Machine learning"],
  Programming_Language: ["Python"],
  Database: ["MySQL"],
  Tool: ["PowerBI", "Tableau"]
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("AI");

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-8">My Skills</h3>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(skillData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition 
              ${selectedCategory === category
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Chips */}
      <div className="flex justify-center flex-wrap gap-4">
        {skillData[selectedCategory].map((skills) => (
          <div
            key={skills}
            className="px-4 py-2 bg-white/10 text-gray-300 rounded-full border border-white/20 hover:bg-cyan-500 hover:text-white transition"
          >
            {skills}
          </div>
        ))}
      </div>
    </section>
  );
}
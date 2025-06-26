
import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "R", "JavaScript", "Swift"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Web & Mobile Development", 
      icon: Wrench,
      skills: ["HTML", "CSS", "JavaScript", "Flask", "Angular", "SwiftUI", "Flutter"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Databases & Cloud",
      icon: Database, 
      skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["TensorFlow", "GitHub", "Git", "Firebase"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-white mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 animate-fade-in transform-gpu"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg`}>
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 shadow-lg transform-gpu cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "C++", "R", "JavaScript", "Swift"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Frameworks & Tools", 
      icon: Wrench,
      skills: ["Flask", "Django", "Angular", "SwiftUI", "Firebase", "TensorFlow"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Databases",
      icon: Database, 
      skills: ["MongoDB", "PostgreSQL", "Firebase Firestore"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "GitHub", "Firebase", "Git"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-6 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl`}>
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}
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

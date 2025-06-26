
import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "R", "HTML", "CSS", "JavaScript"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Tools/Frameworks", 
      icon: Wrench,
      skills: ["Flask", "Django", "Angular", "SwiftUI", "Firebase"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "GitHub", "Firebase"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className={`p-3 rounded-full ${category.color} w-fit mx-auto mb-4`}>
              <category.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-gray-50 px-3 py-2 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

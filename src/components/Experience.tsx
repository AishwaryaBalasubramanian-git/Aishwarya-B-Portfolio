
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Orion Innovation",
      period: "Jul–Aug 2024",
      description: "Developed a prediction model for Drug Testing System (DTS) with 90% accuracy.",
      highlight: "90% Accuracy"
    },
    {
      title: "Web Development Intern",
      company: "Orion Innovation", 
      period: "Jan–Feb 2024",
      description: "Built an AFL dashboard using Flask and Angular to visualize football data.",
      highlight: "Full-Stack"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-blue-800 font-medium">{exp.highlight}</span>
                  </div>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

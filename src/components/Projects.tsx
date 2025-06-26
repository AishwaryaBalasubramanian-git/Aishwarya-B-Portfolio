
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dysgraphia Detection System",
      description: "CNN & ViT based handwriting analysis for early detection of dysgraphia",
      tech: "Python, TensorFlow, Computer Vision"
    },
    {
      title: "Django Research Data Management System", 
      description: "Comprehensive system for managing research data with advanced analytics",
      tech: "Django, PostgreSQL, Python"
    },
    {
      title: "LearnSpace iOS App",
      description: "Educational mobile application built with modern iOS frameworks",
      tech: "SwiftUI, Firebase, iOS"
    },
    {
      title: "Pomodoro Focus Music App",
      description: "Productivity app combining Pomodoro technique with focus-enhancing music",
      tech: "iOS, Swift, Audio Processing"
    },
    {
      title: "Smile-Activated Donation System",
      description: "Innovative donation system using facial recognition to detect smiles",
      tech: "OpenCV, Flask, Computer Vision"
    },
    {
      title: "Interactive Quiz Website",
      description: "Dynamic quiz platform with real-time scoring and user engagement",
      tech: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <Code className="text-blue-600" size={24} />
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-gray-600 font-medium">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

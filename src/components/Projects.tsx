
import React from 'react';
import { Code, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Resume Classification using K-NN & One-vs-Rest",
      description: "Advanced machine learning system for automated resume classification using K-Nearest Neighbors algorithm combined with One-vs-Rest strategy for multi-class classification. Implements sophisticated text processing and feature extraction techniques.",
      tech: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
      github: "https://github.com/AishwaryaBalasubramanian-git/Resume-Classification-using-K-Nearest-Neighbors-and-One-vs-Rest-Strategy",
      category: "Machine Learning",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "LearnSpace iOS App",
      description: "Comprehensive educational mobile application built with modern iOS frameworks. Features interactive learning modules, progress tracking, and seamless user experience with SwiftUI and Firebase integration.",
      tech: ["SwiftUI", "Firebase", "iOS", "Authentication"],
      github: "https://github.com/AishwaryaBalasubramanian-git/learnspace101",
      category: "Mobile Development",
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "Pomodoro Focus Music App",
      description: "Innovative productivity application combining the Pomodoro technique with focus-enhancing music. Features customizable timer settings, ambient soundscapes, and productivity analytics to boost work efficiency.",
      tech: ["iOS", "Swift", "Audio Processing", "UI/UX"],
      github: "https://github.com/AishwaryaBalasubramanian-git/pomo",
      category: "Productivity",
      gradient: "from-orange-400 to-red-600"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-6 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-500/50 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <Code className="text-white" size={24} />
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="text-gray-300 group-hover:text-white" size={18} />
              </a>
            </div>
            
            <div className="mb-3">
              <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
                {project.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-700/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Github size={14} />
                <span>Open Source</span>
              </div>
              <span className="text-xs text-gray-500">View on GitHub</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-2xl border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/a9b5097a-2da7-4435-b346-1c75a36462d6.png"
                alt="Aishwarya B"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/50 shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aishwarya B
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6 animate-fade-in">
            AI/ML Specialist • Full-Stack Developer • iOS Developer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <MapPin size={20} />
              <span>Coimbatore, India</span>
            </div>
            <a 
              href="mailto:aishwaryab1804@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-lg"
            >
              <Mail size={20} />
              <span>aishwaryab1804@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/aishwarya-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/aishwaryaB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-lg"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

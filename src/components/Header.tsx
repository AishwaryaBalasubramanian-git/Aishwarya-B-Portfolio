
import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in">
            Aishwarya B
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-4 animate-fade-in">
            AI/ML Specialist & Full-Stack Developer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <MapPin size={20} />
              <span>Coimbatore, India</span>
            </div>
            <a 
              href="mailto:aishwaryab1804@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-600 transition-colors hover:scale-105 transform"
            >
              <Mail size={20} />
              <span>aishwaryab1804@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/aishwarya-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors hover:scale-105 transform"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/aishwaryaB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors hover:scale-105 transform"
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

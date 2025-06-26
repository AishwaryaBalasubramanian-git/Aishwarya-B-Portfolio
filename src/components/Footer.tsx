
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-12 mt-24 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gray-300">Made with</span>
          <Heart className="text-red-500 animate-pulse" size={20} fill="currentColor" />
          <span className="text-gray-300">and</span>
          <Code className="text-blue-400" size={20} />
          <span className="text-gray-300">by</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Aishwarya B
          </span>
        </div>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          © 2024 Aishwarya B. Ready to build innovative solutions and contribute to meaningful projects. 
          Let's create something amazing together.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

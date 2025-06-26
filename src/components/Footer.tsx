
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span>Made with</span>
          <Heart className="text-red-500" size={20} fill="currentColor" />
          <span>and</span>
          <Code className="text-blue-400" size={20} />
          <span>by Aishwarya B</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Aishwarya B. Ready to build innovative solutions and contribute to meaningful projects.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

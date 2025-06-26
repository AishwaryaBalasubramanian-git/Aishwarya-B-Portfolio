
import React from 'react';

const About = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12 hover:shadow-blue-500/10 transition-all duration-500">
        <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
          Building tomorrow's technology today! I'm passionate about creating intelligent solutions that make a real difference. 
          From AI-powered applications to sleek iOS experiences, I turn complex problems into elegant, user-friendly innovations. 
          Currently pursuing Computer Science at KPR Institute of Engineering and Technology, I believe in the power of code to create extraordinary moments.
        </p>
      </div>
    </section>
  );
};

export default About;

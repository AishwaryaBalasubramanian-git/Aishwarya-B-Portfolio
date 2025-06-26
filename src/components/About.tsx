
import React from 'react';

const About = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12 hover:shadow-blue-500/10 transition-all duration-500">
        <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
          I'm an AI/ML and web development enthusiast who builds intelligent and user-friendly applications. 
          Currently pursuing my BE in Computer Science at KPR Institute of Engineering and Technology, 
          I'm passionate about solving real-world problems using AI and contributing to open-source projects. 
          With hands-on experience in machine learning, web development, and mobile app development, 
          I strive to create innovative solutions that make a meaningful impact.
        </p>
      </div>
    </section>
  );
};

export default About;


import React from 'react';

const About = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
          Full-stack developer passionate about crafting elegant solutions across the entire tech stack! 
          From building intelligent ML models and robust backend APIs to creating seamless mobile experiences and intuitive web interfaces, 
          I thrive on turning complex problems into user-friendly innovations. With expertise spanning 
          <span className="text-blue-400 font-medium"> machine learning, database architecture, cloud infrastructure, </span>
          and <span className="text-purple-400 font-medium">mobile development</span>, 
          I'm currently pursuing Computer Science at KPR Institute, always eager to learn and build something extraordinary.
        </p>
      </div>
    </section>
  );
};

export default About;

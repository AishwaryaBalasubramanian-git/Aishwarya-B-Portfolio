
import React from 'react';
import { Award, Users, Code } from 'lucide-react';

const ZohoExperience = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Creating Memorable Moments
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          My reason to work in software is to create moments like this - presenting my project at Zoho Chennai, 
          where developers from across the country and Apple engineers came together to appreciate innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Recognition at Zoho Chennai</h3>
              <p className="text-gray-300 leading-relaxed">
                Presented innovative projects to a diverse audience of developers and Apple engineers, 
                receiving appreciation for creative problem-solving and technical excellence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">National Developer Gathering</h3>
              <p className="text-gray-300 leading-relaxed">
                Connected with talented developers from across the country, sharing insights and 
                learning from diverse perspectives in the tech community.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Code className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation Showcase</h3>
              <p className="text-gray-300 leading-relaxed">
                Demonstrated cutting-edge solutions and participated in collaborative discussions 
                about the future of software development and technology innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <img 
              src="/lovable-uploads/77b830e7-2998-4432-b4a0-18524c681814.png"
              alt="Presenting at Zoho Chennai - Thanks for joining event"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <p className="text-gray-300 text-sm text-center">Zoho Chennai Developer Meetup</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <img 
                src="/lovable-uploads/9dbc703d-44d1-4a3c-8965-253b4b2e3a7f.png"
                alt="Collaborating with fellow developers"
                className="w-full h-32 object-cover rounded-xl mb-2"
              />
              <p className="text-gray-300 text-xs text-center">Developer Collaboration</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <img 
                src="/lovable-uploads/4c3506b2-3431-4ff7-b68c-7c12714cba38.png"
                alt="Project presentation session"
                className="w-full h-32 object-cover rounded-xl mb-2"
              />
              <p className="text-gray-300 text-xs text-center">Project Presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZohoExperience;

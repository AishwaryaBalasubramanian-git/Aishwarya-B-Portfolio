
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "AWS Cloud Practitioner",
    "Lyzr AI Certified Developer", 
    "Deloitte Data Analytics (Forage)",
    "GitHub Student Pack",
    "Coursera: Data Acquisition & Management",
    "NPTEL: Responsible & Safe AI"
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Certifications
      </h2>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/10 transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-600/30 transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-600/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                <CheckCircle className="text-white" size={20} />
              </div>
              <span className="text-gray-200 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

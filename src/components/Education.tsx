
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/10 transition-all duration-500">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <GraduationCap className="text-white" size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Engineering in Computer Science and Engineering (AI & ML)
            </h3>
            <p className="text-blue-400 font-medium text-lg mb-3">
              KPR Institute of Engineering and Technology
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={18} />
                <span>Expected graduation: May 2026</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg inline-block font-bold">
              CGPA: 8.53
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

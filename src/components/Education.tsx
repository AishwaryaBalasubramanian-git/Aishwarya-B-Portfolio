
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <GraduationCap className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              BE in Computer Science and Engineering (AI & ML)
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              KPR Institute of Engineering and Technology
            </p>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Expected graduation: May 2026</span>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <span className="text-green-800 font-medium">CGPA: 8.53</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

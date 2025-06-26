
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <span className="text-gray-800 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

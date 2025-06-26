
import React from 'react';
import { Users, Star } from 'lucide-react';

const Leadership = () => {
  const activities = [
    {
      title: "Executive Member",
      organization: "Software Development Club",
      description: "Leading software development initiatives and mentoring junior members"
    },
    {
      title: "Anti-Drug Campaign Ambassador", 
      organization: "Community Outreach",
      description: "Spreading awareness about drug prevention in educational institutions"
    },
    {
      title: "Marketing Lead",
      organization: "IEEE Educational Society",
      description: "Managing marketing strategies and promotional activities for technical events"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership & Extracurriculars</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="text-yellow-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{activity.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{activity.organization}</p>
                <p className="text-gray-700 text-sm">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;


import React from 'react';
import { Users, Trophy, Megaphone } from 'lucide-react';

const Leadership = () => {
  const activities = [
    {
      title: "Executive Member",
      organization: "Software Development Club",
      icon: Users,
      description: "Leading technical initiatives and mentoring fellow students in software development projects.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Marketing Lead", 
      organization: "IEEE Educational Society",
      icon: Trophy,
      description: "Driving marketing strategies and promoting educational technology initiatives.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Anti-Drug Campaign Ambassador",
      organization: "Community Outreach",
      icon: Megaphone,
      description: "Advocating for drug-free communities and organizing awareness campaigns.",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-white mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
        Leadership & Extracurriculars
      </h2>
      
      {/* First two cards in a row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {activities.slice(0, 2).map((activity, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 text-center animate-fade-in transform-gpu"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <activity.icon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
            <p className="text-blue-400 font-medium mb-4">{activity.organization}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{activity.description}</p>
          </div>
        ))}
      </div>
      
      {/* Third card centered */}
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 text-center animate-fade-in transform-gpu"
            style={{ animationDelay: '0.4s' }}
          >
            <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${activities[2].gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <activities[2].icon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{activities[2].title}</h3>
            <p className="text-blue-400 font-medium mb-4">{activities[2].organization}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{activities[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

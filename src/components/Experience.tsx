
import React from 'react';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Orion Innovation",
      duration: "Jul–Aug 2024",
      description: "Developed a prediction model for Drug Testing System (DTS) with 90% accuracy using advanced ML algorithms and data preprocessing techniques.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Model Development"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Web Development Intern", 
      company: "Orion Innovation",
      duration: "Jan–Feb 2024",
      description: "Built an AFL dashboard using Flask and Angular to visualize football data with interactive charts and real-time analytics.",
      skills: ["Flask", "Angular", "Data Visualization", "Dashboard Development"],
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-6">
              <div className={`p-4 bg-gradient-to-br ${exp.gradient} rounded-xl flex-shrink-0`}>
                <Briefcase className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

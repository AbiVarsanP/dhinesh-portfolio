import React from 'react';
import { Code, Database, Globe, Languages, Briefcase, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming",
      skills: [
        { name: "Python", level: "Intermediate", proficiency: 75 },
        { name: "C Programming", level: "Intermediate", proficiency: 70 },
        { name: "Java", level: "Beginner", proficiency: 45 },
        { name: "JavaScript", level: "Beginner", proficiency: 50 },
        { name: "R Programming", level: "Intermediate", proficiency: 65 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Data Analytics",
      skills: [
        { name: "SQL", level: "Intermediate", proficiency: 80 },
        { name: "Power BI", level: "Beginner", proficiency: 55 }
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: "Beginner", proficiency: 60 },
        { name: "MERN Stack", level: "Learning", proficiency: 40 }
      ]
    },
    {
      icon: <Languages size={32} />,
      title: "Languages",
      skills: [
        { name: "Tamil", level: "Native", proficiency: 100 },
        { name: "English", level: "Professional", proficiency: 90 }
      ]
    },
    {
      icon: <Technology size={32} />,
      title: "Technology",
      skills: [
        { name: "Machine Learning", level: "Professional", proficiency: 90 },
        { name: "Deep Learning", level: "Professional", proficiency: 80 }
      ]
    },
    {
      icon: <Tools size={32} />,
      title: "Tools",
      skills: [
        { name: "MS Office", level: "Intermediate", proficiency: 85 },
        { name: "Eclipse", level: "Professional", proficiency: 100 },
        { name: "Git", level: "Intermediate", proficiency: 80 },
        { name: "Power BI,", level: "Professional", proficiency: 90 }
      ]
    }
  ];

  const experiences = [
    {
      company: "Oasis Infobytes",
      position: "Data Analytics Intern",
      period: "Aug 2024 - Sep 2024",
      type: "Remote",
      achievements: [
        "Gained experience in data cleaning, visualization, and reporting",
        "Contributed to real-time analytics projects using key tools and methodologies"
      ],
      featured: true
    },
    {
      company: "Worisgo Company",
      position: "Risk Analyst Intern",
      period: "May 2025 – Aug 2025",
      type: "Remote",
      achievements: [
        "Assessed financial risks using data-driven models and statistical techniques.",
        "Analyzed datasets to identify patterns and mitigation strategies.",
        "Prepared concise reports to support business decisions."
      ],
      featured: true
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Work Experience</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                exp.featured
                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/50'
                  : 'bg-gray-800/50 border-gray-700/50'
              } backdrop-blur-sm`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${
                    exp.featured ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    <Briefcase size={24} className={exp.featured ? 'text-blue-400' : 'text-purple-400'} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                    <p className="text-blue-400 font-medium">{exp.position}</p>
                  </div>
                </div>
                {exp.featured && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
                    <Star size={16} />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                  {exp.period}
                </span>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  exp.type === 'Remote' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {exp.type}
                </span>
              </div>

              {exp.achievements.length > 0 && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

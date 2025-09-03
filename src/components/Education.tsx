import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: "K. Ramakrishnan College of Technology, Trichy, India",
      degree: "B.Tech: Artificial Intelligence and Data Science",
      period: "2022 - 2026",
      score: "CGPA: 7.97/10",
      type: "current"
    },
    {
      institution: "Government Higher Secondary School, Trichy, India",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022",
      score: "Score: 76.3%",
      type: "completed"
    },
    {
      institution: "Government Higher Secondary School, Trichy, India",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2020",
      score: "Score: 84%",
      type: "completed"
    }
  ];

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", date: "November 2024", featured: true },
    { name: "Celonis Academic Process Mining Fundamentals", date: "November 2024", featured: true },
    { name: "Database Management Systems (NPTEL)", date: "July 2023 - September 2023", featured: true },
    { name: "Smart Belt with Auto-adjustment (Patent)", date: "2025", featured: true },
    { name: "AI on Azure", date: "", featured: false },
    { name: "Game Development Using Pygame on GUVI", date: "", featured: false },
    { name: "Refine and Test ML Models on Azure", date: "", featured: false },
    { name: "Process Custom Documents with AI Builder on Azure", date: "", featured: false },
    { name: "Use Automated Machine Learning in Azure", date: "", featured: false },
    { name: "Modeling Structures on Bentley", date: "", featured: false },
    { name: "Train and Evaluate Regression Models on Azure", date: "", featured: false },
    { name: "Create a Classification Model with Azure", date: "", featured: false },
    { name: "2D/3D CAD Modeling on Bentley", date: "", featured: false },
    { name: "Get Started with RPA Development on UiPath", date: "", featured: false },
    { name: "Computer Vision Onramp on MathWorks", date: "", featured: false },
    { name: "MongoDB Basics on MongoDB", date: "", featured: false },
    { name: "Explore Automation Development with UiPath Studio", date: "", featured: false },
    { name: "Generative AI with Simplilearn", date: "", featured: false },
    { name: "Deep Learning Workshop on IIT", date: "", featured: false },
    { name: "Finalist in Arczon Hackathon", date: "", featured: true }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Education Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-full ${
                      edu.type === 'current' 
                        ? 'bg-gradient-to-r from-green-500 to-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.institution}</h3>
                    <p className="text-blue-400 font-medium mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>{edu.score}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Trichy, India</span>
                      </div>
                    </div>
                  </div>
                  
                  {edu.type === 'current' && (
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        Current
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Certifications & Achievements</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certifications.filter(cert => cert.featured).map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/50 hover:border-blue-400 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <Award size={20} className="text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-white font-medium leading-tight">{cert.name}</h4>
                  {cert.date && (
                    <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
                  )}
                </div>
              </div>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                Featured
              </span>
            </div>
          ))}
        </div>

        {/* Other Certifications - Compact Grid */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
          <h4 className="text-xl font-semibold text-white mb-4 text-center">Additional Certifications</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.filter(cert => !cert.featured).map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
              >
                <Award size={16} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium leading-tight">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { Linkedin, Github, Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "B.Tech student with 7.95 CGPA, consistently achieving academic excellence"
    },
    {
      icon: <Users size={24} />,
      title: "Team Player",
      description: "Active participant in co-curricular activities and collaborative projects"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Quick Learner",
      description: "Proven ability to adapt to new technologies and environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <img
                    src="dhinesh.jpg"
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="leading-relaxed">
                I'm a passionate B.Tech student specializing in <span className="text-blue-400 font-semibold">Artificial Intelligence and Data Science</span> with a CGPA of 7.95. My journey in technology is driven by curiosity and a desire to create meaningful solutions.
              </p>
              
              <p className="leading-relaxed">
                My expertise spans across <span className="text-purple-400 font-semibold">data analytics, deep learning, and web development</span>. I thrive on challenges and believe in continuous learning and personal development.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://linkedin.com/in/dhinesh-kumar-a-62b9a4257"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/dhineshkumarai2213/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white mr-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

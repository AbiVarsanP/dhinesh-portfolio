import React from 'react';
import { ExternalLink, Github, Zap, Shield, Search, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Garbage Classifier using YOLOv5",
      description: "Implemented a deep learning model to classify waste materials for recycling, optimizing accuracy with YOLOv5. Features real-time object detection and waste categorization.",
      technologies: ["Python", "YOLOv5", "Computer Vision", "Deep Learning"],
      githubUrl: "https://github.com/dhineshkumarai2213/Design-project-01",
      featured: true,
      icon: <Search size={24} />
    },
    {
      title: "Caesar Cipher Encryption",
      description: "Developed a Python-based encryption tool supporting various shift values for secure communication. Includes both encryption and decryption capabilities.",
      technologies: ["Python", "Cryptography", "Security", "CLI"],
      githubUrl: "https://github.com/dhineshkumarai2213/Caesar-Cipher-Encryption/tree/main",
      featured: false,
      icon: <Shield size={24} />
    },
    {
      title: "Gas Leakage Detector",
      description: "Led a team to design a cost-effective gas detection system within a ₹3,500 budget. Features real-time monitoring and alert mechanisms.",
      technologies: ["IoT", "Sensors", "Arduino", "Hardware"],
      githubUrl: "#",
      featured: false,
      icon: <Zap size={24} />
    },
    {
      title: "Career Navigator",
      description: "Led a team to design a comprehensive career guidance platform. Helps users explore career paths and make informed decisions.",
      technologies: ["React", "Node.js", "Database", "Web Development"],
      liveUrl: "https://acn-frontend.onrender.com",
      githubUrl: "#",
      featured: true,
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI, web development, and IoT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                project.featured
                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/50 hover:border-blue-400'
                  : 'bg-gray-900/50 border-gray-700/50 hover:border-purple-500/50'
              } backdrop-blur-sm`}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    project.featured 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600'
                  }`}>
                    {React.cloneElement(project.icon, { size: 20 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubUrl === '#' && !project.liveUrl && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600/30 text-gray-400 rounded-lg cursor-not-allowed">
                    <Github size={16} />
                    <span>Coming Soon</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and exciting collaborations.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
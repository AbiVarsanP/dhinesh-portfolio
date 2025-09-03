import React, { useEffect, useRef } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = ['Data Scientist', 'AI Enthusiast', 'Web Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && charIndex < currentRole.length) {
        if (typedRef.current) {
          typedRef.current.textContent = currentRole.slice(0, charIndex + 1);
        }
        charIndex++;
        timeout = setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        if (typedRef.current) {
          typedRef.current.textContent = currentRole.slice(0, charIndex - 1);
        }
        charIndex--;
        timeout = setTimeout(typeEffect, 50);
      } else if (!isDeleting && charIndex === currentRole.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = setTimeout(typeEffect, 200);
      }
    };

    typeEffect();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Dhinesh Kumar A
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            I'm a{' '}
            <span 
              ref={typedRef}
              className="text-blue-400 font-semibold border-r-2 border-blue-400 animate-pulse"
            ></span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A passionate AI and Data Science enthusiast skilled in Python, SQL, and deep learning, 
            dedicated to building innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dhinesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
            
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;

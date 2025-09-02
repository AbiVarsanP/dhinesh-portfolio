import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>by</span>
            <span className="text-blue-400 font-semibold">Dhinesh Kumar A</span>
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            © {new Date().getFullYear()} Dhinesh Kumar A. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
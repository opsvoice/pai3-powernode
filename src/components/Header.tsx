import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold text-white">PAI3</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-400 transition-colors">Home</Link>
            <Link to="/nodes" className="text-white hover:text-green-400 transition-colors">Power Node</Link>
            <Link to="/node-types" className="text-white hover:text-green-400 transition-colors">Node Types</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/nodes"
              className="bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all"
            >
              Own a Power Node
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
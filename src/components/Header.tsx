
import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/70d36be2-1da9-459a-87fa-149edb5dbe8c.png" 
              alt="SmartWay Idioms" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Metodologia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/smartwayidioms?locale=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-red-50"
            >
              <Facebook size={22} />
            </a>
            <a 
              href="https://www.instagram.com/smartwayidioms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-red-50"
            >
              <Instagram size={22} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left py-2"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left py-2"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left py-2"
              >
                Fale Conosco
              </button>
              <div className="flex space-x-4 pt-4 border-t border-gray-100">
                <a 
                  href="https://www.facebook.com/smartwayidioms?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600 transition-colors p-2"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/smartwayidioms/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600 transition-colors p-2"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

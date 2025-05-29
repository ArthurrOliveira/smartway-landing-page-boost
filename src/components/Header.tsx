
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
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/70d36be2-1da9-459a-87fa-149edb5dbe8c.png" 
              alt="SmartWay Idioms" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
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
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/smartwayidioms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
              >
                Fale Conosco
              </button>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/smartwayidioms?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/smartwayidioms/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600 transition-colors"
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

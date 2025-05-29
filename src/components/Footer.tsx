
import React from 'react';
import { Facebook, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2 space-y-6">
            <img 
              src="/lovable-uploads/70d36be2-1da9-459a-87fa-149edb5dbe8c.png" 
              alt="SmartWay Idioms" 
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              A Maneira Inteligente de Aprender Inglês. Há mais de 10 anos oferecendo 
              cursos personalizados com professores nativos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/smartwayidioms?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/smartwayidioms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-300"
                >
                  Metodologia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-300"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Mail size={18} />
                </div>
                <span className="text-gray-300 text-lg">contato@smartwayidioms.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Phone size={18} />
                </div>
                <span className="text-gray-300 text-lg">(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © 2024 SmartWay Idioms. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

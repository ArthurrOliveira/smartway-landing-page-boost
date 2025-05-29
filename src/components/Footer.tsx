
import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/70d36be2-1da9-459a-87fa-149edb5dbe8c.png" 
              alt="SmartWay Idioms" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              A Maneira Inteligente de Aprender Inglês. Há mais de 10 anos oferecendo 
              cursos personalizados com professores nativos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/smartwayidioms?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/smartwayidioms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Metodologia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300 text-sm">contato@smartwayidioms.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300 text-sm">(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 SmartWay Idioms. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

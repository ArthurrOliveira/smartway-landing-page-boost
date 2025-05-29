
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Limpar formulário
    setFormData({ nome: '', email: '', telefone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos no inglês
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Solicite Informações
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-red-600 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">E-mail</h4>
                  <p className="text-gray-600">contato@smartwayidioms.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-red-600 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-red-600 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Endereço</h4>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br/>
                    Centro - São Paulo/SP<br/>
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder para imagem de contato */}
            <div className="mt-8 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                [Espaço para imagem<br/>
                - Recepção da escola<br/>
                - Equipe de atendimento<br/>
                - Fachada do estabelecimento]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

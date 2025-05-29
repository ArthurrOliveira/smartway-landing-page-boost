
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    <section id="contato" className="py-24 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <span className="text-yellow-300 font-semibold text-lg tracking-wide uppercase">Fale Conosco</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comece sua jornada no inglês hoje
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos no inglês
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Formulário */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Solicite Informações
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-white mb-3">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/70 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/70 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-white mb-3">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-white/70 transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-300 text-red-700 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-yellow-300 mt-1 p-3 bg-white/20 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">E-mail</h4>
                  <p className="text-red-100 text-lg">contato@smartwayidioms.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-yellow-300 mt-1 p-3 bg-white/20 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Telefone</h4>
                  <p className="text-red-100 text-lg">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-yellow-300 mt-1 p-3 bg-white/20 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Endereço</h4>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Rua das Flores, 123<br/>
                    Centro - São Paulo/SP<br/>
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Image Container */}
            <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-3xl h-64 flex items-center justify-center relative overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <p className="text-white/90 text-center z-10 text-lg font-medium">
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

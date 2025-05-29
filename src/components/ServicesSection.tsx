
import React from 'react';
import { User, Users, Check } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <User className="w-12 h-12" />,
      title: "Aulas Individuais",
      description: "Atenção 100% personalizada com professor nativo",
      features: [
        "Horários flexíveis",
        "Conteúdo personalizado",
        "Evolução mais rápida",
        "Foco total em suas necessidades"
      ],
      popular: true
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Aulas em Grupo",
      description: "Aprenda junto com outros alunos em ambiente colaborativo",
      features: [
        "Interação social",
        "Custos reduzidos",
        "Prática em grupo",
        "Networking"
      ],
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <span className="text-red-600 font-semibold text-lg tracking-wide uppercase">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Modalidades que se adaptam a você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos modalidades de ensino que se adaptam ao seu estilo de aprendizado e disponibilidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative ${
                service.popular ? 'lg:-mt-8' : ''
              }`}
            >
              <div className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full ${
                service.popular ? 'border-2 border-red-600 scale-105' : 'border border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-5 ${
                  service.popular ? 'bg-gradient-to-br from-red-600 to-red-700' : 'bg-gradient-to-br from-gray-600 to-gray-700'
                }`}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className={`text-red-600 mb-6 flex justify-center p-4 rounded-2xl mx-auto w-fit ${
                      service.popular ? 'bg-red-50' : 'bg-gray-50'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Check className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                      service.popular 
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl' 
                        : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          {/* Modern Image Container */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
            <p className="text-gray-500 text-center z-10 text-lg font-medium">
              [Espaço para imagem<br/>
              - Aulas individuais e em grupo<br/>
              - Diferentes modalidades<br/>
              - Ambiente de aprendizado]
            </p>
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-red-600/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-300/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from 'react';
import { User, Users } from 'lucide-react';

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
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos modalidades de ensino que se adaptam ao seu estilo de aprendizado e disponibilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                service.popular ? 'border-2 border-red-600' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-red-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  service.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          {/* Placeholder para imagem dos serviços */}
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500 text-center">
              [Espaço para imagem<br/>
              - Aulas individuais e em grupo<br/>
              - Diferentes modalidades<br/>
              - Ambiente de aprendizado]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

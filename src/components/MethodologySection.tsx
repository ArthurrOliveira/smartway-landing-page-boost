
import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const MethodologySection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco Individual",
      description: "Atendimento personalizado para suas necessidades específicas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professores Nativos",
      description: "Aprenda com quem nasceu falando inglês"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Objetivos Diversos",
      description: "Viagens, trabalho, certificações ou conversação"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Método Comprovado",
      description: "Mais de 10 anos desenvolvendo comunicação eficaz"
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <span className="text-red-600 font-semibold text-lg tracking-wide uppercase">Nossa Metodologia</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
            Desenvolvemos suas habilidades de comunicação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolver as habilidades de comunicação em inglês com foco nas necessidades individuais 
            dos alunos (viagens, trabalho, certificações, conversação etc.)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="text-center p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 bg-white h-full">
                <div className="text-red-600 mb-6 flex justify-center p-4 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors duration-300 mx-auto w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Modern Image Container */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
                <p className="text-gray-500 text-center z-10 text-lg font-medium">
                  [Espaço para imagem<br/>
                  - Aula em andamento<br/>
                  - Método de ensino<br/>
                  - Interação professor-aluno]
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Abordagem Personalizada
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada aluno é único, e nossa metodologia reconhece isso. Desenvolvemos planos de estudo 
                específicos para cada objetivo, seja para uma viagem internacional, promoção no trabalho 
                ou certificação internacional.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com professores nativos experientes, garantimos que você aprenda não apenas a gramática, 
                mas também a cultura e nuances da língua inglesa.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Conheça Nossa Metodologia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;


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
    <section id="metodologia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Nossa Metodologia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolver as habilidades de comunicação em inglês com foco nas necessidades individuais 
            dos alunos (viagens, trabalho, certificações, conversação etc.)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {/* Placeholder para imagem da metodologia */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  [Espaço para imagem<br/>
                  - Aula em andamento<br/>
                  - Método de ensino<br/>
                  - Interação professor-aluno]
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Abordagem Personalizada
              </h3>
              <p className="text-gray-600 mb-4">
                Cada aluno é único, e nossa metodologia reconhece isso. Desenvolvemos planos de estudo 
                específicos para cada objetivo, seja para uma viagem internacional, promoção no trabalho 
                ou certificação internacional.
              </p>
              <p className="text-gray-600">
                Com professores nativos experientes, garantimos que você aprenda não apenas a gramática, 
                mas também a cultura e nuances da língua inglesa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

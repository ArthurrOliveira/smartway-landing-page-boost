
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Há mais de 10 anos no mercado, a SmartWay Idioms é especializada no ensino de língua inglesa, 
              oferecendo aulas com professores nativos. Seus cursos são personalizados, focados nos objetivos 
              a serem alcançados pelo aluno.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Professores Nativos</div>
              </div>
            </div>
          </div>
          <div>
            {/* Placeholder para imagem sobre a empresa */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                [Espaço para imagem<br/>
                - Professores da SmartWay<br/>
                - Ambiente da escola<br/>
                - Equipe trabalhando]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

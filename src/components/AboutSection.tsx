
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-red-600 font-semibold text-lg tracking-wide uppercase">Sobre Nós</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Transformando vidas através do inglês
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Há mais de 10 anos no mercado, a SmartWay Idioms é especializada no ensino de língua inglesa, 
              oferecendo aulas com professores nativos. Seus cursos são personalizados, focados nos objetivos 
              a serem alcançados pelo aluno.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-3">10+</div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-3">100%</div>
                <div className="text-gray-600 font-medium">Professores Nativos</div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Modern Image Container */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
              <p className="text-gray-500 text-center z-10 text-lg font-medium">
                [Espaço para imagem<br/>
                - Professores da SmartWay<br/>
                - Ambiente da escola<br/>
                - Equipe trabalhando]
              </p>
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-red-600/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-yellow-300/30 rounded-full"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Aulas online e presenciais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Aprenda Inglês com
              <span className="block text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Professores Nativos
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 leading-relaxed max-w-2xl">
              A Maneira Inteligente de Aprender - Cursos personalizados há mais de 10 anos no mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Comece Agora
              </button>
              <button 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm"
              >
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="text-center relative">
            {/* Modern Card Container */}
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-lg border border-white/20 shadow-2xl">
              <div className="bg-white/20 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <p className="text-white/90 text-center z-10 text-lg font-medium">
                  [Espaço para imagem principal<br/>
                  - Professores ensinando<br/>
                  - Alunos em aula<br/>
                  - Ambiente de aprendizado]
                </p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/50 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

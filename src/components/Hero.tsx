
import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Aprenda Inglês com
              <span className="block text-yellow-300">Professores Nativos</span>
            </h1>
            <p className="text-xl mb-8 text-red-100">
              A Maneira Inteligente de Aprender - Cursos personalizados há mais de 10 anos no mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Comece Agora
              </button>
              <button 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all"
              >
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="text-center">
            {/* Placeholder para imagem de destaque */}
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="bg-white/20 rounded-lg h-64 flex items-center justify-center">
                <p className="text-white/80 text-center">
                  [Espaço para imagem principal<br/>
                  - Professores ensinando<br/>
                  - Alunos em aula<br/>
                  - Ambiente de aprendizado]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

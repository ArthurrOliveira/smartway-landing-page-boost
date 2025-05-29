
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Substitua o número pelo número real do WhatsApp da SmartWay
    const phoneNumber = "5511999999999"; // Formato: código do país + DDD + número
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os cursos da SmartWay Idioms.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 group"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold animate-pulse">!</span>
      </div>
    </button>
  );
};

export default WhatsAppButton;

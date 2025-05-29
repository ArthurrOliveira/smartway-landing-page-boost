
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
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;

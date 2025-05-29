
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MethodologySection from '@/components/MethodologySection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <MethodologySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

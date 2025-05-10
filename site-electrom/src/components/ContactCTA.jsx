import React from 'react';

const ContactCTA = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-brand-blue/80 to-brand-petrol flex flex-col items-center text-white">
      <h3 className="text-3xl font-bold mb-4 text-center">Vamos tirar seu projeto do papel?</h3>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow transition-all text-lg">WhatsApp</a>
        <a href="#formulario" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all text-lg">Formulário</a>
        <a href="https://calendly.com/SEULINK" target="_blank" rel="noopener noreferrer" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg shadow transition-all text-lg">Agendar com Especialista</a>
      </div>
    </section>
  );
};

export default ContactCTA; 
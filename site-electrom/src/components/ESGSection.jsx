"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ESGSection() {
  return (
    <motion.section
      className="w-full py-16 bg-brand-petrol text-white flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-4 text-center">Sustentabilidade que gera retorno</h3>
      <p className="text-lg text-gray-200 mb-6 text-center max-w-2xl">
        Nossas soluções promovem impacto ambiental positivo e resultados financeiros para nossos clientes. Atuamos alinhados aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
      </p>
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {/* Badges ODS (placeholders) */}
        {["ODS 7", "ODS 9", "ODS 12", "ODS 13"].map((ods, idx) => (
          <motion.span
            key={ods}
            className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: '#5a7fd6' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {ods}
          </motion.span>
        ))}
      </div>
      <a href="/sustentabilidade" className="underline text-brand-blue font-semibold hover:text-brand-blue/80 transition">Saiba mais sobre sustentabilidade</a>
    </motion.section>
  );
} 
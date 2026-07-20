"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutStrip() {
  return (
    <motion.section
      className="w-full bg-brand-petrol text-white py-16 px-6 md:px-0 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <blockquote className="text-2xl md:text-3xl font-semibold italic text-center max-w-3xl mb-6">
        “Engenharia das Energias” é nosso compromisso em combinar <span className="text-brand-blue">sustentabilidade, eficiência e inovação</span> para um futuro energético consciente.
      </blockquote>
      <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl">
        Com mais de 30 anos de atuação, a Electrom Engenharia entrega soluções certificadas, seguras e inovadoras para empresas que buscam economia, sustentabilidade e conformidade. Nosso legado é construir um futuro energético mais eficiente, confiável e responsável.
      </p>
    </motion.section>
  );
} 
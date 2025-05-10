"use client";
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    name: 'Rede X',
    result: 'redução 35% na conta',
    roi: 'ROI 3,2 anos',
    img: '/cases/rede-x.jpg',
  },
  // Adicione mais cases conforme necessário
];

export default function CaseCarousel() {
  return (
    <motion.section
      className="w-full py-16 bg-background text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Casos de Sucesso</h3>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              className="min-w-[320px] bg-brand-petrol rounded-xl shadow p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 #7AA2E4aa' }}
            >
              <div className="w-full h-40 bg-gray-800 rounded mb-4 overflow-hidden flex items-center justify-center">
                {/* Imagem do case (placeholder) */}
                <img src={c.img} alt={c.name} className="object-cover w-full h-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{c.name}</h4>
              <p className="text-brand-blue font-bold mb-1">{c.result}</p>
              <span className="text-gray-200 text-sm">{c.roi}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 
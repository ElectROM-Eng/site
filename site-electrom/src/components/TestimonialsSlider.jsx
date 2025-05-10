"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'João Silva',
    company: 'Indústria Alfa',
    text: 'A Electrom nos ajudou a reduzir 30% do custo de energia e trouxe segurança para nossa operação.',
    img: '/testimonials/joao.jpg',
  },
  {
    name: 'Maria Souza',
    company: 'Fazenda Solar Beta',
    text: 'Equipe técnica excelente, projeto entregue antes do prazo e com ótimo suporte.',
    img: '/testimonials/maria.jpg',
  },
  {
    name: 'Carlos Lima',
    company: 'Grupo Gama',
    text: 'A consultoria estratégica da Electrom foi fundamental para migrarmos ao Mercado Livre.',
    img: '/testimonials/carlos.jpg',
  },
];

export default function TestimonialsSlider() {
  return (
    <motion.section
      className="w-full py-16 bg-background text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">O que dizem nossos clientes</h3>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="min-w-[320px] bg-brand-petrol rounded-xl shadow p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 #7AA2E4aa' }}
            >
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-brand-blue" />
              <p className="text-lg italic mb-3 text-gray-100">“{t.text}”</p>
              <span className="font-semibold text-brand-blue">{t.name}</span>
              <span className="text-gray-300 text-sm">{t.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 
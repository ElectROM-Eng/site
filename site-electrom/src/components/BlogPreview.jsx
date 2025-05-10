"use client";
import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Como reduzir custos com energia solar',
    category: 'Energia Solar',
    date: '10/06/2024',
    img: '/blog/solar.jpg',
  },
  {
    title: 'Eficiência energética: tendências para 2024',
    category: 'Eficiência',
    date: '02/06/2024',
    img: '/blog/eficiencia.jpg',
  },
  {
    title: 'Mercado Livre de Energia: vale a pena?',
    category: 'Consultoria',
    date: '28/05/2024',
    img: '/blog/mercado-livre.jpg',
  },
];

export default function BlogPreview() {
  return (
    <motion.section
      className="w-full py-16 bg-background text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Conteúdo em destaque</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div
              key={idx}
              className="bg-brand-petrol rounded-xl shadow p-4 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 #7AA2E4aa' }}
            >
              <div className="w-full h-40 bg-gray-800 rounded mb-4 overflow-hidden">
                <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
              </div>
              <span className="text-xs uppercase text-brand-blue font-semibold mb-1">{p.category}</span>
              <h4 className="text-lg font-bold mb-2 line-clamp-2">{p.title}</h4>
              <span className="text-gray-400 text-sm">{p.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 
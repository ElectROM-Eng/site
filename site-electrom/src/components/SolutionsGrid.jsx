"use client";
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Energia Solar',
    headline: 'Gere sua própria energia',
    bullets: ['Payback ≤4 anos', 'CAPEX flexível'],
  },
  {
    title: 'Eficiência Energética',
    headline: 'Gaste menos, produza mais',
    bullets: ['Retrofit LED', 'Motores IE4'],
  },
  {
    title: 'Projetos Elétricos',
    headline: 'Segurança & conformidade',
    bullets: ['BT/MT', 'SPDA', 'NR-10'],
  },
  {
    title: 'Consultoria Estratégica',
    headline: 'Energia como ativo financeiro',
    bullets: ['PPA', 'Mercado Livre', 'ESG'],
  },
];

export default function SolutionsGrid() {
  return (
    <section className="w-full py-16 bg-background text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Soluções Electrom</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              className="bg-brand-petrol rounded-xl p-6 shadow flex flex-col items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px 0 #7AA2E4aa" }}
            >
              <h4 className="text-xl font-semibold mb-2 text-brand-blue">{sol.title}</h4>
              <span className="text-base mb-3 text-gray-200">{sol.headline}</span>
              <ul className="mb-4 space-y-1">
                {sol.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-gray-300">• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/solucoes" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg shadow transition-all text-lg">
            Entenda como funciona
          </a>
        </div>
      </div>
    </section>
  );
} 
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadMagnet() {
  const [gasto, setGasto] = useState('');
  const [segmento, setSegmento] = useState('');
  const [estado, setEstado] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcularEconomia(e) {
    e.preventDefault();
    // Simulação simples: 20% de economia
    if (gasto && segmento && estado) {
      const economia = (parseFloat(gasto) * 0.2).toFixed(2);
      setResultado(`Você pode economizar até R$ ${economia} por ano!`);
    }
  }

  return (
    <motion.section
      className="w-full py-16 bg-brand-blue/10 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-brand-petrol">Quer saber quanto pode economizar nos próximos 12 meses?</h3>
      <form onSubmit={calcularEconomia} className="flex flex-col md:flex-row gap-4 mb-4 w-full max-w-2xl justify-center">
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Gasto médio mensal (R$)"
          value={gasto}
          onChange={e => setGasto(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue w-full md:w-56"
          required
        />
        <input
          type="text"
          placeholder="Segmento (ex: Indústria)"
          value={segmento}
          onChange={e => setSegmento(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue w-full md:w-56"
          required
        />
        <input
          type="text"
          placeholder="Estado (UF)"
          value={estado}
          onChange={e => setEstado(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue w-full md:w-32"
          required
        />
        <motion.button
          type="submit"
          className="bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-blue/90 transition-all"
          whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 #7AA2E4aa" }}
          whileTap={{ scale: 0.97 }}
        >
          Calcular
        </motion.button>
      </form>
      {resultado && (
        <div className="text-lg text-brand-petrol font-semibold mb-2">{resultado}</div>
      )}
      <div className="text-center">
        <span className="text-gray-700">Receba um diagnóstico detalhado e converse com um especialista.</span>
        <a href="#contato" className="ml-2 underline text-brand-blue font-semibold hover:text-brand-blue/80 transition">Agendar call</a>
      </div>
    </motion.section>
  );
} 
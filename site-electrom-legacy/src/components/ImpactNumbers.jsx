"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const impacts = [
  { value: 1200000, label: 'tCO₂ evitadas', prefix: '', suffix: '' },
  { value: 0, label: 'acidentes de trabalho em 10 anos', prefix: '', suffix: '' },
  { value: 98, label: 'de satisfação dos clientes', prefix: '', suffix: '%' },
];

export default function ImpactNumbers() {
  return (
    <motion.section
      className="w-full py-16 bg-fixed bg-center bg-cover bg-[url('/impact-bg.jpg')] relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-6">
        {impacts.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-brand-blue mb-2 drop-shadow-lg">
              <CountUp end={item.value} duration={2} separator="." prefix={item.prefix} suffix={item.suffix} />
            </span>
            <span className="text-lg md:text-xl text-white text-center drop-shadow">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 
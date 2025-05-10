"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const metrics = [
  { value: 25, prefix: '+', suffix: '', label: 'anos de mercado' },
  { value: 800, prefix: '+', suffix: '', label: 'projetos entregues' },
  { value: 120, prefix: 'R$ ', suffix: ' mi', label: 'em economia aos clientes' },
];

export default function TrustBar() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-8 bg-background text-white">
      {metrics.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">
            <CountUp end={item.value} duration={2} prefix={item.prefix} suffix={item.suffix} />
          </span>
          <span className="text-base md:text-lg text-gray-200 text-center">
            {item.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
} 
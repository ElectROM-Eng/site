"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: '1999', title: 'Fundação da Electrom', desc: 'Início das atividades focadas em engenharia elétrica industrial.' },
  { year: '2007', title: '1ª subestação 138 kV', desc: 'Entrega do primeiro grande projeto de subestação industrial.' },
  { year: '2012', title: 'Energia Solar FV', desc: 'Entrada no segmento de energia solar fotovoltaica.' },
  { year: '2021', title: '500 MWp instalados', desc: 'Marca expressiva em potência instalada em projetos solares.' },
  { year: '2024', title: 'Rebranding', desc: 'Nova identidade: Engenharia das Energias.' },
];

export default function TimelineHorizontal() {
  const containerRef = useRef(null);
  const CARD_WIDTH = 352; // 320px card + 32px gap
  const totalCards = milestones.length;
  const visibleCards = 3;
  const maxX = -CARD_WIDTH * (totalCards - visibleCards);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, maxX]);

  return (
    <section ref={containerRef} className="relative w-full py-16 bg-background overflow-hidden">
      <h3 className="text-3xl font-bold mb-10 text-center text-white">Nossa Jornada</h3>
      <div className="relative h-[360px]">
        <motion.div
          style={{ x }}
          className="flex gap-8 absolute left-0 top-0 px-6"
        >
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative min-w-[320px] max-w-xs snap-center bg-white/10 backdrop-blur-md border border-brand-blue/20 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all duration-300 hover:scale-105 hover:border-brand-blue/60 group"
            >
              {/* Linha conectando os marcos */}
              {idx !== 0 && (
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-brand-blue/40 to-brand-blue/80 z-0" />
              )}
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-2xl font-bold mb-3 text-white shadow-xl border-4 border-white group-hover:scale-110 group-hover:shadow-2xl transition-all">
                {item.year}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 text-center drop-shadow-lg">{item.title}</h4>
              <p className="text-gray-200 text-sm text-center mb-2">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
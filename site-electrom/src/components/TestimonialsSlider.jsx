"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

function useResponsiveSlides() {
  // 1 no mobile, 2 no desktop
  const [slides, setSlides] = React.useState(1);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setSlides(2);
      else setSlides(1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return slides;
}

export default function TestimonialsSlider() {
  const slidesToShow = useResponsiveSlides();
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - slidesToShow;

  function prev() {
    setIndex(i => (i <= 0 ? maxIndex : i - 1));
  }
  function next() {
    setIndex(i => (i >= maxIndex ? 0 : i + 1));
  }

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
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 z-10 p-2 rounded-full bg-brand-blue/80 hover:bg-brand-blue text-white shadow-lg transition disabled:opacity-30"
            disabled={testimonials.length <= slidesToShow}
          >
            <FaChevronLeft />
          </button>
          <div className="overflow-hidden w-full">
            <div className="flex justify-center gap-8">
              <AnimatePresence initial={false}>
                {testimonials.slice(index, index + slidesToShow).map((t, idx) => (
                  <motion.div
                    key={t.name}
                    className="min-w-[320px] max-w-md bg-brand-petrol rounded-xl shadow p-6 flex flex-col items-center mx-auto"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-brand-blue" />
                    <p className="text-lg italic mb-3 text-gray-100 text-center">“{t.text}”</p>
                    <span className="font-semibold text-brand-blue">{t.name}</span>
                    <span className="text-gray-300 text-sm">{t.company}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-0 z-10 p-2 rounded-full bg-brand-blue/80 hover:bg-brand-blue text-white shadow-lg transition disabled:opacity-30"
            disabled={testimonials.length <= slidesToShow}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </motion.section>
  );
} 
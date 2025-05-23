'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView
} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Sample cases data (can be replaced with data from WordPress)
const casesData = [
  {
    id: 1,
    title: 'Indústria Têxtil - Redução de 95% de Consumo',
    category: 'Industrial',
    description:
      'Implementação de sistema fotovoltaico em indústria têxtil de grande porte, resultando em economia significativa e retorno rápido do investimento.',
    imageUrl: '/placeholder-case1.jpg',
    featured: true,
    date: '2023-08-12',
    roi: 'ROI: 28.5% a.a.',
    impact: '1.368 ton CO2 evitadas/ano'
  },
  {
    id: 2,
    title: 'Shopping Center - Eficiência Energética',
    category: 'Comercial',
    description:
      'Modernização do sistema de iluminação e climatização em shopping center, com redução de 30% no consumo energético.',
    imageUrl: '/placeholder-case2.jpg',
    featured: false,
    date: '2023-06-15',
    roi: 'ROI: 35.7% a.a.',
    impact: '1.620 ton CO2 evitadas/ano'
  },
  {
    id: 3,
    title: 'Condomínio Residencial - Energia Solar',
    category: 'Residencial',
    description:
      'Instalação de sistema fotovoltaico em condomínio de alto padrão com 95% de redução no consumo de energia da rede.',
    imageUrl: '/placeholder-case3.jpg',
    featured: false,
    date: '2023-04-20',
    roi: 'ROI: 23.8% a.a.',
    impact: '285 ton CO2 evitadas/ano'
  },
  {
    id: 4,
    title: 'Hospital - Automação Energética',
    category: 'Saúde',
    description:
      'Sistema de automação e gestão energética para hospital de grande porte, com redução de 40% nos custos operacionais.',
    imageUrl: '/placeholder-case4.jpg',
    featured: false,
    date: '2023-01-10',
    roi: 'ROI: 31.2% a.a.',
    impact: '920 ton CO2 evitadas/ano'
  },
  {
    id: 5,
    title: 'Escola Municipal - Projeto Solar',
    category: 'Educação',
    description:
      'Implementação de energia solar em escola municipal, proporcionando economia e oportunidade educacional sobre sustentabilidade.',
    imageUrl: '/placeholder-case5.jpg',
    featured: false,
    date: '2022-11-05',
    roi: 'ROI: 25.6% a.a.',
    impact: '156 ton CO2 evitadas/ano'
  },
  {
    id: 6,
    title: 'Centro Logístico - Eficiência Total',
    category: 'Industrial',
    description:
      'Projeto integrado de eficiência energética e geração distribuída para centro logístico de grande porte.',
    imageUrl: '/placeholder-case6.jpg',
    featured: false,
    date: '2022-09-18',
    roi: 'ROI: 33.1% a.a.',
    impact: '2.450 ton CO2 evitadas/ano'
  }
]

const Card = ({ case: caseItem, index, inView }) => {
  // Calculate a staggered animation delay based on the index
  const delay = 0.1 + index * 0.08

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 15,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1.0] // Custom easing for the slow start, quick middle, slow end effect
      }}
      className="bg-white rounded-xl shadow-xl overflow-hidden h-full group"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={caseItem.imageUrl}
          alt={caseItem.title}
          width={600}
          height={340}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {caseItem.category}
        </div>
        {caseItem.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            Destaque
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {caseItem.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {caseItem.description}
        </p>
        <div className="flex justify-between items-center text-xs font-medium text-gray-500 mb-4">
          <span>{new Date(caseItem.date).toLocaleDateString('pt-BR')}</span>
          <span className="text-blue-600">{caseItem.roi}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-xs font-semibold">
            {caseItem.impact}
          </span>
          <Link
            href={`/cases/${caseItem.id}`}
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center group-hover:underline"
          >
            Ver detalhes
            <svg
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function AnimatedCases() {
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  // Filter featured cases for display (first 3 in this example)
  const featuredCases = casesData.slice(0, 3)
  const remainingCases = casesData.slice(3)
  const displayedCases = showAll ? casesData : featuredCases

  // Section title animation with spring physics
  const sectionTitleRef = useRef(null)
  const isTitleVisible = useInView(sectionTitleRef, { once: true, amount: 0.5 })

  const titleControls = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }
    }
  }

  // Get scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Add spring physics to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform the scroll progress into different ranges for various elements
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%'])
  const cardsY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ['10%', '0%', '-10%']
  )
  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.section
      ref={ref}
      className="relative py-16 md:py-24 bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: "url('/noise-pattern.png')",
        backgroundSize: 'cover'
      }}
      initial="hidden"
      animate="visible"
    >
      {/* Background Gradient with Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Animation */}
        <motion.div
          ref={sectionTitleRef}
          variants={titleControls}
          initial="hidden"
          animate={isTitleVisible ? 'visible' : 'hidden'}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Nossos Casos de Sucesso
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conheça projetos que transformaram o consumo energético de nossos
            clientes, gerando economia e sustentabilidade.
          </p>
        </motion.div>

        {/* Cards Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y: cardsY }}
        >
          {displayedCases.map((caseItem, index) => (
            <Card
              key={caseItem.id}
              case={caseItem}
              index={index}
              inView={isInView}
            />
          ))}
        </motion.div>

        {/* Show More Button with Fade Gradient */}
        {!showAll && remainingCases.length > 0 && (
          <div className="relative mt-16 text-center">
            {/* Fade Gradient */}
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>

            <motion.button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Mostrar Mais Casos
            </motion.button>
          </div>
        )}

        {/* CTA for Case Studies */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/cases"
            className="inline-flex items-center bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Ver Todos os Casos de Sucesso
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

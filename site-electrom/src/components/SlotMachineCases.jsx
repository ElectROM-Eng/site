'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// Sample cases data
const allCases = [
  {
    id: 1,
    title: 'Fábrica Têxtil Solar',
    category: 'Industrial',
    reduction: '85%',
    featured: true
  },
  {
    id: 2,
    title: 'Shopping Eficiência',
    category: 'Comercial',
    reduction: '60%'
  },
  { id: 3, title: 'Hospital Verde', category: 'Saúde', reduction: '45%' },
  {
    id: 4,
    title: 'Condomínio Solar',
    category: 'Residencial',
    reduction: '90%'
  },
  {
    id: 5,
    title: 'Indústria Química',
    category: 'Industrial',
    reduction: '70%'
  },
  { id: 6, title: 'Centro Logístico', category: 'Logística', reduction: '55%' },
  { id: 7, title: 'Escola Municipal', category: 'Educação', reduction: '80%' },
  { id: 8, title: 'Hotel Resort', category: 'Hotelaria', reduction: '65%' },
  { id: 9, title: 'Supermercado Rede', category: 'Varejo', reduction: '50%' },
  { id: 10, title: 'Clínica Médica', category: 'Saúde', reduction: '75%' },
  {
    id: 11,
    title: 'Fábrica Automotiva',
    category: 'Industrial',
    reduction: '40%'
  },
  {
    id: 12,
    title: 'Escritório Corporativo',
    category: 'Comercial',
    reduction: '35%'
  }
]

// Distribuir cases em 3 colunas
const column1 = allCases.filter((_, idx) => idx % 3 === 0)
const column2 = allCases.filter((_, idx) => idx % 3 === 1)
const column3 = allCases.filter((_, idx) => idx % 3 === 2)

function CaseCard({ caseItem, isFeature = false }) {
  const getCategoryIcon = category => {
    switch (category) {
      case 'Industrial':
        return '🏭'
      case 'Comercial':
        return '🏢'
      case 'Saúde':
        return '🏥'
      case 'Residencial':
        return '🏠'
      case 'Logística':
        return '📦'
      case 'Educação':
        return '🎓'
      case 'Hotelaria':
        return '🏨'
      case 'Varejo':
        return '🛒'
      default:
        return '⚡'
    }
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden mb-4 ${
        isFeature ? 'ring-4 ring-brand-blue' : ''
      }`}
    >
      <div className="relative aspect-video bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
          {getCategoryIcon(caseItem.category)}
        </div>
        <div className="absolute top-2 left-2 bg-brand-blue text-white text-xs px-2 py-1 rounded">
          {caseItem.category}
        </div>
        {isFeature && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded font-bold">
            DESTAQUE
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2">{caseItem.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">
            {caseItem.reduction} economia
          </span>
          <button className="text-brand-blue hover:text-brand-blue/80 text-sm font-semibold">
            Ver detalhes →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function SlotMachineCases() {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  // Prevenir erro de hidratação
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'] // Começa assim que a seção entra na tela
  })

  // Spring para movimento mais suave
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Movimento das colunas - mais responsivo
  const column1Y = useTransform(
    smoothProgress,
    [0, 0.2, 0.6, 1],
    [300, 50, -50, -150]
  )
  const column2Y = useTransform(
    smoothProgress,
    [0, 0.25, 0.65, 1],
    [400, 0, -100, -200]
  )
  const column3Y = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [500, -50, -150, -250]
  )

  // Título aparece IMEDIATAMENTE quando a seção entra na tela
  const titleOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1])

  // Botão aparece mais cedo
  const buttonOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1])

  // Renderização condicional para evitar hidratação
  if (!isClient) {
    return (
      <section className="min-h-[120vh] bg-gray-50 relative overflow-hidden">
        <div className="sticky top-16 z-20 bg-gray-50/90 backdrop-blur-sm py-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projetos que transformaram o consumo energético de nossos clientes
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="min-h-[120vh] bg-gray-50 relative overflow-hidden" // Reduzido de 150vh para 120vh
    >
      {/* Título da seção - aparece IMEDIATAMENTE */}
      <motion.div
        className="sticky top-16 z-20 bg-gray-50/90 backdrop-blur-sm py-8 text-center"
        style={{ opacity: titleOpacity }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Cases de Sucesso
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Projetos que transformaram o consumo energético de nossos clientes
        </p>
      </motion.div>

      {/* Container das colunas slot machine */}
      <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full relative">
            {/* Coluna 1 */}
            <motion.div className="space-y-4" style={{ y: column1Y }}>
              {column1.map((caseItem, idx) => (
                <CaseCard key={`col1-${idx}`} caseItem={caseItem} />
              ))}
              {/* Card fixo final - Destaque */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }} // Ainda menor threshold
                transition={{ delay: 0.1, duration: 0.3 }} // Mais rápido
              >
                <CaseCard caseItem={allCases[0]} isFeature={true} />
              </motion.div>
            </motion.div>

            {/* Coluna 2 */}
            <motion.div className="space-y-4 mt-8" style={{ y: column2Y }}>
              {column2.map((caseItem, idx) => (
                <CaseCard key={`col2-${idx}`} caseItem={caseItem} />
              ))}
              {/* Card fixo final */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <CaseCard caseItem={allCases[1]} />
              </motion.div>
            </motion.div>

            {/* Coluna 3 */}
            <motion.div className="space-y-4 mt-16" style={{ y: column3Y }}>
              {column3.map((caseItem, idx) => (
                <CaseCard key={`col3-${idx}`} caseItem={caseItem} />
              ))}
              {/* Card fixo final */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <CaseCard caseItem={allCases[2]} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Botão final */}
      <motion.div
        className="relative z-20 text-center py-16 bg-gray-50"
        style={{ opacity: buttonOpacity }}
      >
        <motion.button
          className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all text-lg inline-flex items-center"
          whileHover={{ scale: 1.05, boxShadow: '0 4px 24px 0 #7AA2E4aa' }}
          whileTap={{ scale: 0.97 }}
        >
          Veja Outros os Cases de Sucesso
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
        </motion.button>
      </motion.div>
    </section>
  )
}

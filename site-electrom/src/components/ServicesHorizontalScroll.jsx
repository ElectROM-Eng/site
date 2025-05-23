'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Projetos Fotovoltáicos',
    description:
      'Sistemas de energia solar sob medida para reduzir seus custos energéticos e aumentar a sustentabilidade do seu negócio.',
    features: [
      'Dimensionamento técnico personalizado',
      'Análise completa de viabilidade econômica',
      'Projeto executivo detalhado',
      'Acompanhamento de instalação e comissionamento'
    ],
    testimonial:
      'A Electrom transformou nossa empresa com energia solar. Reduzimos 80% da conta de luz e ainda contribuímos para o meio ambiente.',
    bgGradient: 'from-yellow-600/40 via-yellow-700/30 to-brand-petrol',
    cta: 'Calcular Economia Solar',
    icon: '☀️'
  },
  {
    id: 2,
    title: 'Gerenciamento de Obras',
    description:
      'Coordenação completa de projetos elétricos e energéticos, garantindo prazo, qualidade e segurança em todas as etapas.',
    features: [
      'Planejamento executivo detalhado',
      'Controle rigoroso de qualidade',
      'Gestão especializada de equipes técnicas',
      'Entrega garantida no prazo acordado'
    ],
    testimonial:
      'Projeto executado no prazo e com qualidade excepcional. A equipe da Electrom é altamente profissional.',
    bgGradient: 'from-blue-600/40 via-blue-700/30 to-brand-petrol',
    cta: 'Solicitar Orçamento',
    icon: '🏗️'
  },
  {
    id: 3,
    title: 'Projetos Hidráulicos',
    description:
      'Soluções integradas em sistemas hidráulicos industriais e prediais com foco em eficiência e sustentabilidade.',
    features: [
      'Sistemas prediais completos',
      'Bombeamento industrial otimizado',
      'Automação hidráulica inteligente',
      'Projetos de eficiência hídrica'
    ],
    testimonial:
      'O sistema hidráulico projetado pela Electrom otimizou nosso consumo de água em 40% e reduziu custos operacionais.',
    bgGradient: 'from-cyan-600/40 via-cyan-700/30 to-brand-petrol',
    cta: 'Consultar Especialista',
    icon: '💧'
  },
  {
    id: 4,
    title: 'Projetos e Instalação de Média e Baixa Tensão',
    description:
      'Projetos elétricos industriais e comerciais com máxima segurança e conformidade às normas técnicas.',
    features: [
      'Subestações industriais e comerciais',
      'Painéis elétricos personalizados',
      'Cabeamento industrial especializado',
      'Sistemas de proteção e automação'
    ],
    testimonial:
      'Instalação elétrica impecável. Segurança e eficiência que nossa indústria precisava.',
    bgGradient: 'from-purple-600/40 via-purple-700/30 to-brand-petrol',
    cta: 'Agendar Diagnóstico',
    icon: '⚡'
  },
  {
    id: 5,
    title: 'Energias Renováveis',
    description:
      'Soluções completas em fontes renováveis para autonomia energética e impacto ambiental positivo.',
    features: [
      'Energia eólica de pequeno e médio porte',
      'Sistemas de biomassa sustentável',
      'Pequenas centrais hidrelétricas',
      'Sistemas híbridos otimizados'
    ],
    testimonial:
      'Com o sistema híbrido da Electrom, alcançamos 95% de autonomia energética. Investimento que se paga sozinho.',
    bgGradient: 'from-green-600/40 via-green-700/30 to-brand-petrol',
    cta: 'Explorar Soluções',
    icon: '🌱'
  },
  {
    id: 6,
    title: 'Consultoria em Energia',
    description:
      'Diagnósticos energéticos e estratégias personalizadas para otimização de consumo e redução de custos.',
    features: [
      'Auditoria energética completa',
      'Análise tarifária especializada',
      'Estratégias de eficiência operacional',
      'Cálculo detalhado de ROI de projetos'
    ],
    testimonial:
      'A consultoria da Electrom identificou oportunidades que resultaram em 30% de economia na nossa conta de energia.',
    bgGradient: 'from-indigo-600/40 via-indigo-700/30 to-brand-petrol',
    cta: 'Solicitar Auditoria',
    icon: '📊'
  }
]

export default function ServicesHorizontalScroll() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Transform correto para que cada seção ocupe exatamente 100vw
  const totalSections = services.length
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalSections - 1) * 100]
  )

  return (
    <section ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{
            x: useTransform(x, value => `${value}vw`),
            width: `${totalSections * 100}vw`
          }}
        >
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex-shrink-0 w-[100vw] h-full bg-gradient-to-br ${service.bgGradient} flex items-center relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              </div>

              {/* Content - 2 Columns */}
              <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">
                {/* Left Column */}
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    {service.title}
                  </h2>

                  <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-center text-white text-lg"
                      >
                        <span className="w-2 h-2 bg-brand-blue rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all text-lg inline-flex items-center">
                    {service.cta}
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
                  </button>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Image Placeholder */}
                  <div className="relative aspect-video bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-40">{service.icon}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                      Imagem do projeto
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                    <blockquote className="text-white italic text-lg leading-relaxed">
                      "{service.testimonial}"
                    </blockquote>
                    <div className="mt-4 text-brand-blue font-semibold">
                      — Cliente Electrom
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {services.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      dotIdx === idx ? 'bg-brand-blue scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

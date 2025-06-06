'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Footer from './Footer'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Engenharia de Energias',
    description:
      'Soluções especializadas em conservação e eficiência energética para otimizar o consumo e reduzir impactos ambientais.',
    features: [
      'Conservação energética',
      'Eficiência energética',
      'Controle de emissões'
    ],
    testimonial:
      'A gente sabia que estava desperdiçando energia, mas não fazia ideia do quanto. A ElectROM fez uma auditoria completa e reduziu nosso consumo em quase metade. Hoje, temos controle total da operação.',
    testimonialAuthor: 'Carlos Mendes, gerente de operações da LactoSul',
    imageUrl: '/services/engenharia-energia.png',
    bgGradient: 'from-green-600/40 via-green-700/30 to-brand-petrol',
    cta: 'Quero uma análise energética',
    icon: '⚡'
  },
  {
    id: 2,
    title: 'Energias Renováveis',
    description:
      'Sistemas completos de energia limpa e sustentável para autonomia energética e redução do impacto ambiental.',
    features: [
      'Fotovoltaica',
      'Eólica',
      'Biomassa',
      'Aquecimento Solar',
      'Estações de Carregamento EV'
    ],
    testimonial:
      'Moramos numa chácara afastada e o sistema da ElectROM nos deu 100% de autonomia. Hoje, a conta de luz é simbólica e ainda conseguimos alimentar a estação de carregamento do carro elétrico.',
    testimonialAuthor: 'Adriana Silva, produtora rural em Ibiúna (SP)',
    imageUrl: '/services/energia-renovavel.png',
    bgGradient: 'from-yellow-600/40 via-yellow-700/30 to-brand-petrol',
    cta: 'Simular Autonomia Energética',
    icon: '🌱'
  },
  {
    id: 3,
    title: 'Instalação de Média e Baixa Tensão',
    description:
      'Projetos elétricos com máxima segurança e conformidade às normas técnicas.',
    features: [
      'Ramal de entrada',
      'Cabine Primária',
      'Centro de Medição',
      'SPDA',
      'HVAC',
      'Automação',
      'Vistorias',
      'Manutenção em Geral'
    ],
    testimonial:
      'Tínhamos problemas recorrentes de queda de energia e instabilidade no sistema. Após a instalação da ElectROM, nossa rede está robusta, segura e dentro de todas as normas técnicas.',
    testimonialAuthor: 'Rogério Farias, diretor da TecnoAlfa Industrial',
    imageUrl: '/services/media-alta-tensao.png',
    bgGradient: 'from-purple-600/40 via-purple-700/30 to-brand-petrol',
    cta: 'Falar com engenheiro técnico',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'Consultoria de Energia',
    description:
      'Diagnósticos energéticos e estratégias personalizadas para otimização de consumo e redução de custos.',
    features: [
      'Mercado Livre de Energia',
      'Geração de Distribuida (GD)',
      'Gestão de Crédito de Energia',
      'Créditos de Carbono'
    ],
    testimonial:
      'A migração para o Mercado Livre de Energia parecia impossível. Com a consultoria da ElectROM, entendemos todo o processo e reduzimos a conta da fábrica em 27% já no primeiro trimestre.',
    testimonialAuthor: 'Luciana Gama, CFO da BioQuímica BR',
    imageUrl: '/services/consultoria-energia.png',
    bgGradient: 'from-indigo-600/40 via-indigo-700/30 to-brand-petrol',
    cta: 'Ver oportunidades no Mercado Livre',
    icon: '📊'
  },
  {
    id: 5,
    title: 'Gerenciamento de Obras',
    description:
      'Coordenação completa de projetos em geral, garantindo prazo, qualidade e segurança em todas as etapas.',
    features: [
      'Gestão de contrato',
      'Gestão de equipe',
      'Gestão de materiais',
      'Segurança patrimonial e pessoal'
    ],
    testimonial:
      'A ElectROM assumiu a obra da nova planta quando tudo estava atrasado. Em 6 meses entregaram tudo, com padrão técnico de altíssimo nível. Nunca mais contratamos ninguém sem gestão integrada.',
    testimonialAuthor: 'Marcos Teixeira, CEO do Grupo Planterra',
    imageUrl: '/services/obras.jpg',
    bgGradient: 'from-blue-600/40 via-blue-700/30 to-brand-petrol',
    icon: '🏗️'
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
    <>
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
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative z-10">
                  {/* Left Column */}
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-white">
                      {service.title}
                    </h2>

                    <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
                      {service.description}
                    </p>

                    <ul
                      className={`${
                        service.features.length > 6
                          ? 'grid grid-cols-2 gap-x-4 gap-y-2'
                          : 'space-y-2'
                      }`}
                    >
                      {service.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          className="flex items-center text-white text-base"
                        >
                          <span className="w-2 h-2 bg-brand-blue rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.cta && (
                      <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all text-base inline-flex items-center mt-4">
                        {service.cta}
                        <svg
                          className="ml-2 w-4 h-4"
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
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Image Container */}
                    <div className="relative aspect-video bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden shadow-2xl group">
                      {service.imageUrl ? (
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl opacity-40">
                            {service.icon || '🖼️'}
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        Projeto Electrom
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-xl">
                      <blockquote className="text-white italic text-base leading-relaxed">
                        "{service.testimonial}"
                      </blockquote>
                      <div className="mt-3 text-brand-blue font-semibold text-sm">
                        — {service.testimonialAuthor || 'Cliente Satisfeito'}
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
                        dotIdx === idx
                          ? 'bg-brand-blue scale-125'
                          : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

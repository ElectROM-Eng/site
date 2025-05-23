'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import partnersConfig from '../data/partners.json'

const PartnerCard = ({ partner, onPartnerClick }) => {
  const handleClick = () => {
    switch (partner.linkType) {
      case 'external':
        window.open(partner.link, '_blank', 'noopener,noreferrer')
        break
      case 'internal':
        window.location.href = partner.link
        break
      case 'modal':
        onPartnerClick(partner)
        break
      case 'none':
      default:
        // No action for supporters without links
        break
    }
  }

  const isClickable = partner.linkType !== 'none'

  return (
    <motion.div
      className={`flex-shrink-0 w-32 md:w-40 h-20 md:h-24 mx-2 md:mx-4 bg-white rounded-lg shadow-lg flex items-center justify-center p-2 md:p-4 transition-all duration-300 ${
        isClickable
          ? 'cursor-pointer hover:shadow-xl hover:scale-105'
          : 'cursor-default'
      }`}
      whileHover={isClickable ? { y: -2, scale: 1.05 } : {}}
      onClick={isClickable ? handleClick : undefined}
    >
      <div className="relative w-full h-full">
        <Image
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          fill
          className="object-contain filter hover:grayscale-0 grayscale transition-all duration-300"
          sizes="(max-width: 768px) 128px, 160px"
        />
      </div>
    </motion.div>
  )
}

const PartnerModal = ({ partner, isOpen, onClose }) => {
  if (!isOpen || !partner) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-md w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center mb-4">
            <Image
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              width={80}
              height={40}
              className="object-contain mr-4"
            />
            <h3 className="text-xl font-bold text-brand-petrol">
              {partner.name}
            </h3>
          </div>
          <p className="text-gray-600 mb-4">{partner.description}</p>
          {partner.link && partner.linkType === 'external' && (
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mr-2 inline-block"
            >
              Visitar Site
            </a>
          )}
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Fechar
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PartnersCarousel() {
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sort partners by priority
  const sortedPartners = partnersConfig.partners.sort(
    (a, b) => a.priority - b.priority
  )

  const handlePartnerClick = partner => {
    setSelectedPartner(partner)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPartner(null)
  }

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-petrol mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Construindo o futuro energético em colaboração com empresas líderes
            do setor
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-24 md:h-28 overflow-hidden">
          {/* Continuous scrolling animation */}
          <div className="flex animate-scroll-infinite">
            {/* Triple the partners for seamless infinite scroll */}
            {[...sortedPartners, ...sortedPartners, ...sortedPartners].map(
              (partner, index) => (
                <PartnerCard
                  key={`${partner.id}-${index}`}
                  partner={partner}
                  onPartnerClick={handlePartnerClick}
                />
              )
            )}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />
        </div>

        {/* Info text */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-sm text-gray-500">
            Passe o mouse sobre os logos para interagir • Animação pausa ao
            passar o mouse
          </p>
        </div>
      </div>

      {/* Modal for partner details */}
      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

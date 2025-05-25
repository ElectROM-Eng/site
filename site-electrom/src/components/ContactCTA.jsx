'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ContactCTA = () => {
  const contactOptions = [
    {
      title: 'WhatsApp',
      subtitle: 'Resposta rápida',
      description: 'Tire suas dúvidas na hora',
      href: 'https://wa.me/5548999999999?text=Olá! Gostaria de saber mais sobre os serviços da Electrom.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.75" />
        </svg>
      ),
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      primary: true
    },
    {
      title: 'Agendar Reunião',
      subtitle: 'Consultoria gratuita',
      description: '30 min com especialista',
      href: 'https://calendly.com/electrom/consultoria',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      bgColor: 'bg-brand-blue',
      hoverColor: 'hover:bg-brand-blue/90',
      primary: true
    },
    {
      title: 'Formulário Online',
      subtitle: 'Detalhamento completo',
      description: 'Projeto personalizado',
      href: '#formulario',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      bgColor: 'bg-white/10',
      hoverColor: 'hover:bg-white/20',
      borderColor: 'border border-white/20',
      primary: false
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-brand-blue via-brand-petrol to-brand-petrol/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
            <span className="bg-white text-brand-petrol text-sm font-semibold px-4 py-2 rounded-full">
              Próximo Passo
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Vamos tirar seu projeto
            <span className="block text-brand-blue">do papel?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
            Transforme sua visão em realidade com nossa expertise em engenharia
            energética
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Consultoria gratuita
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Resposta em 24h
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              30+ anos de experiência
            </div>
          </div>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group block p-6 rounded-2xl ${option.bgColor} ${
                option.hoverColor
              } ${
                option.borderColor || ''
              } text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${
                    option.primary ? 'bg-white/20' : 'bg-brand-petrol/20'
                  }`}
                >
                  {option.icon}
                </div>
                {option.primary && (
                  <span className="bg-white/20 text-xs font-semibold px-2 py-1 rounded-full">
                    Recomendado
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                {option.title}
              </h3>

              <p className="text-sm font-medium text-white/90 mb-1">
                {option.subtitle}
              </p>

              <p className="text-sm text-white/70 mb-4">{option.description}</p>

              <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                Começar agora
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 text-sm mb-4">
            Mais de <span className="font-bold text-white">500 projetos</span>{' '}
            entregues com excelência
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-xs text-white/60">CREA Registrado</span>
            <span className="text-xs text-white/60">•</span>
            <span className="text-xs text-white/60">ISO 9001</span>
            <span className="text-xs text-white/60">•</span>
            <span className="text-xs text-white/60">30+ Anos</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA

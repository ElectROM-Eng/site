'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: 'Como reduzir custos com energia solar',
    category: 'Energia Solar',
    date: '10/06/2024',
    excerpt:
      'Descubra estratégias práticas para maximizar sua economia com energia solar e acelerar o retorno do investimento.',
    img: '/blog/solar.jpg',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    title: 'Eficiência energética: tendências para 2024',
    category: 'Eficiência',
    date: '02/06/2024',
    excerpt:
      'Explore as principais inovações em eficiência energética que estão transformando o setor industrial.',
    img: '/blog/eficiencia.jpg',
    readTime: '7 min',
    featured: false
  },
  {
    id: 3,
    title: 'Mercado Livre de Energia: vale a pena?',
    category: 'Consultoria',
    date: '28/05/2024',
    excerpt:
      'Entenda quando e como migrar para o mercado livre de energia pode beneficiar sua empresa.',
    img: '/blog/mercado-livre.jpg',
    readTime: '6 min',
    featured: false
  }
]

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            Em Destaque
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-52 overflow-hidden bg-gray-200">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category and Read Time */}
        <div className="flex items-center justify-between text-sm">
          <span className="bg-brand-blue/10 text-brand-blue font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-gray-500 flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-petrol group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-gray-400 text-sm">{post.date}</span>
          <div className="flex items-center text-brand-blue font-semibold text-sm group-hover:gap-2 transition-all duration-300">
            Ler mais
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
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogPreview() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-brand-blue/10 rounded-full mb-4">
            <span className="bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-full">
              Blog
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-petrol mb-4">
            Insights Energéticos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conteúdo especializado para você se manter atualizado sobre o futuro
            da energia
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA to Blog */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-brand-petrol text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-petrol/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Artigos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

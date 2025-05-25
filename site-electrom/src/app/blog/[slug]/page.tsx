'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import { wordpressService, Post } from '@/services/wordpress';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        console.log('Carregando post:', slug);
        
        // Buscar todos os posts e filtrar pelo slug
        const posts = await wordpressService.getPosts(1, 100);
        const foundPost = posts.find(p => p.slug === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post não encontrado');
        }
      } catch (err) {
        console.error('Erro ao carregar post:', err);
        setError('Erro ao carregar o post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
            <p className="mt-4 text-gray-700">Carregando artigo...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-brand-petrol mb-4">Post não encontrado</h1>
            <p className="text-gray-700 mb-8">{error || 'O artigo que você está procurando não existe.'}</p>
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium"
            >
              <FaArrowLeft className="mr-2" />
              Voltar ao Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Voltar ao Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-petrol mb-4 leading-tight">
            {post.title.rendered}
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <div className="flex items-center mr-6">
              <FaCalendarAlt className="mr-2" />
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2" />
              Electrom Engenharia
            </div>
          </div>

        {/* Featured Image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        )}
      </header>

      {/* Post Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-brand-petrol to-brand-blue rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-3">
            Gostou deste conteúdo?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Entre em contato conosco para saber mais sobre nossas soluções em energia.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center bg-white text-brand-petrol px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Fale Conosco
          </Link>
        </div>
      </footer>
    </article>
    </div>
  );
} 
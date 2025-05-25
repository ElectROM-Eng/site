'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import { wordpressService, Post } from '@/services/wordpress';

// Interface para os posts (agora usando a interface do WordPress)
interface BlogPost {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  autor: string;
  categoria: string;
  imagem: string;
  slug: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar posts do WordPress
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        console.log('Carregando posts do WordPress...');
        
        const wpPosts = await wordpressService.getPosts(1, 20);
        console.log('Posts carregados:', wpPosts);
        
        // Converter posts do WordPress para o formato do blog
        const blogPosts: BlogPost[] = wpPosts.map((post: Post) => ({
          id: post.id,
          titulo: post.title.rendered,
          resumo: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          data: new Date(post.date).toLocaleDateString('pt-BR'),
          autor: 'Electrom Engenharia', // Pode ser extraído de post.author se disponível
          categoria: 'energia-solar', // Pode ser extraído de post.categories se disponível
          imagem: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog/default.jpg',
          slug: post.slug
        }));
        
        setPosts(blogPosts);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setError('Erro ao carregar posts do blog');
        
        // Fallback para dados mockados em caso de erro
        setPosts([
          {
            id: 1,
            titulo: 'Como a Energia Solar está Transformando o Setor Industrial',
            resumo: 'Descubra como empresas estão reduzindo custos e impactos ambientais com sistemas fotovoltaicos.',
            data: '15/03/2024',
            autor: 'Electrom Engenharia',
            categoria: 'energia-solar',
            imagem: '/images/blog/energia-solar-industrial.jpg',
            slug: 'energia-solar-setor-industrial'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'energia-solar', nome: 'Energia Solar' },
    { id: 'eficiencia', nome: 'Eficiência Energética' },
    { id: 'sustentabilidade', nome: 'Sustentabilidade' },
    { id: 'inovacao', nome: 'Inovação' }
  ];

  const postsFiltrados = posts.filter(post => {
    const matchSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'todos' || post.categoria === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights e novidades sobre energia, sustentabilidade e inovação
        </p>
        {error && (
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
            ⚠️ {error} - Exibindo conteúdo de exemplo
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Carregando artigos...</p>
        </div>
      )}

      {/* Barra de Pesquisa e Filtros */}
      {!loading && (
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Barra de Pesquisa */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Filtro de Categorias */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setSelectedCategory(categoria.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === categoria.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Grid de Posts */}
      {!loading && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsFiltrados.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem do Post */}
            <div className="relative h-48">
                <Image
                src={post.imagem}
                alt={post.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Conteúdo do Post */}
            <div className="p-6">
              {/* Meta Informações */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <FaCalendarAlt className="mr-1" />
                  {post.data}
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  {post.autor}
                </div>
              </div>

              {/* Título e Resumo */}
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.titulo}
                </a>
              </h2>
              <p className="text-gray-600 mb-4">{post.resumo}</p>

              {/* Categoria e Link */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center text-sm text-blue-600">
                  <FaTag className="mr-1" />
                  {categorias.find(cat => cat.id === post.categoria)?.nome}
                </span>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ler mais
                  <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      )}

      {/* Paginação e Newsletter - só mostrar se não estiver carregando */}
      {!loading && (
        <>
      {/* Paginação (será implementada com WordPress) */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Anterior
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Próximo
          </button>
        </nav>
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Receba Nossas Atualizações</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Inscreva-se para receber os melhores conteúdos sobre energia e sustentabilidade diretamente no seu e-mail.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Inscrever-se
          </button>
        </form>
      </div>
        </>
      )}
    </div>
  );
};

export default BlogPage; 
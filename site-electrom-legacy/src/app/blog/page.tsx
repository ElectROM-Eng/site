'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // 3 linhas de 3 posts

  // Carregar posts do WordPress
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        console.log('Carregando posts do WordPress...');
        
        const wpPosts = await wordpressService.getPosts(1, postsPerPage);
        console.log('Posts carregados:', wpPosts);
        
        // Converter posts do WordPress para o formato do blog
        const blogPosts: BlogPost[] = wpPosts.map((post: Post) => ({
          id: post.id,
          titulo: post.title.rendered,
          resumo: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          data: new Date(post.date).toLocaleDateString('pt-BR'),
          autor: 'Electrom Engenharia',
          categoria: 'energia-solar',
          imagem: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog/default.jpg',
          slug: post.slug
        }));
        
        setPosts(blogPosts);
        setHasMore(wpPosts.length === postsPerPage);
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
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const loadMorePosts = async () => {
    if (loadingMore || !hasMore) return;
    
    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;
      const wpPosts = await wordpressService.getPosts(nextPage, postsPerPage);
      
      if (wpPosts.length > 0) {
        const newBlogPosts: BlogPost[] = wpPosts.map((post: Post) => ({
          id: post.id,
          titulo: post.title.rendered,
          resumo: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          data: new Date(post.date).toLocaleDateString('pt-BR'),
          autor: 'Electrom Engenharia',
          categoria: 'energia-solar',
          imagem: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog/default.jpg',
          slug: post.slug
        }));
        
        setPosts(prev => [...prev, ...newBlogPosts]);
        setCurrentPage(nextPage);
        setHasMore(wpPosts.length === postsPerPage);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error('Erro ao carregar mais posts:', err);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-petrol mb-6">
            Blog Electrom
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Insights e novidades sobre energia, sustentabilidade e inovação
          </p>
          {error && (
            <div className="mt-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg max-w-2xl mx-auto">
              ⚠️ {error} - Exibindo conteúdo de exemplo
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            <p className="mt-6 text-gray-600 text-lg">Carregando artigos...</p>
          </div>
        )}

        {/* Barra de Pesquisa e Filtros */}
        {!loading && (
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Barra de Pesquisa */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-gray-800"
                />
                <FaSearch className="absolute left-4 top-4 text-gray-400" />
              </div>

              {/* Filtro de Categorias */}
              <div className="flex flex-wrap gap-3">
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => setSelectedCategory(categoria.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === categoria.id
                        ? 'bg-brand-blue text-white shadow-lg'
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {postsFiltrados.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <Link href={`/blog/${post.slug}`}>
                    {/* Imagem do Post */}
                    <div className="relative h-48">
                      <Image
                        src={post.imagem}
                        alt={post.titulo}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Conteúdo do Post */}
                    <div className="p-6">
                      {/* Meta Informações */}
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <FaCalendarAlt className="mr-2" />
                          {post.data}
                        </div>
                        <div className="flex items-center">
                          <FaUser className="mr-2" />
                          {post.autor}
                        </div>
                      </div>

                      {/* Título e Resumo */}
                      <h2 className="text-xl font-bold text-brand-petrol mb-3 group-hover:text-brand-blue transition-colors duration-300">
                        {post.titulo}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.resumo}</p>

                      {/* Categoria e Link */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-sm text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                          <FaTag className="mr-2" />
                          {categorias.find(cat => cat.id === post.categoria)?.nome}
                        </span>
                        <span className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium">
                          Ler mais
                          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center">
                <button
                  onClick={loadMorePosts}
                  disabled={loadingMore}
                  className="bg-brand-petrol text-white px-8 py-4 rounded-xl hover:bg-brand-petrol/90 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingMore ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Carregando...
                    </div>
                  ) : (
                    'Carregar Mais Artigos'
                  )}
                </button>
              </div>
            )}

            {/* Newsletter */}
            <div className="mt-20 bg-gradient-to-r from-brand-petrol to-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Receba Nossas Atualizações</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Inscreva-se para receber os melhores conteúdos sobre energia e sustentabilidade diretamente no seu e-mail.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-gray-800 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-brand-petrol rounded-xl hover:bg-gray-100 transition-colors font-semibold"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 
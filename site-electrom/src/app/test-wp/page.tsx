'use client';

import { useState, useEffect } from 'react';
import { wordpressService, Category } from '@/services/wordpress';

export default function TestWPPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const testWordPress = async () => {
      try {
        setLoading(true);
        
        // Testar conexão
        const isConnected = await wordpressService.testConnection();
        setConnectionStatus(isConnected);
        
        if (isConnected) {
          // Buscar categorias
          const cats = await wordpressService.getCategories();
          setCategories(cats);
        }
      } catch (error) {
        console.error('Erro no teste:', error);
        setConnectionStatus(false);
      } finally {
        setLoading(false);
      }
    };

    testWordPress();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Testando WordPress...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Teste WordPress API</h1>
      
      {/* Status da Conexão */}
      <div className="mb-8 p-4 rounded-lg border">
        <h2 className="text-xl font-semibold mb-2">Status da Conexão</h2>
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          connectionStatus 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {connectionStatus ? '✅ Conectado' : '❌ Erro de Conexão'}
        </div>
        <p className="mt-2 text-gray-600">
          API URL: https://wp.electrom.eng.br/wp-json/wp/v2
        </p>
      </div>

      {/* Lista de Categorias */}
      {connectionStatus && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categorias Encontradas</h2>
          {categories.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Nome</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Slug</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Parent ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Posts</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id} className="border-t">
                      <td className="px-4 py-2 font-mono text-blue-600">{category.id}</td>
                      <td className="px-4 py-2">{category.name}</td>
                      <td className="px-4 py-2 font-mono text-gray-600">{category.slug}</td>
                      <td className="px-4 py-2">{category.parent || '-'}</td>
                      <td className="px-4 py-2">{category.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">Nenhuma categoria encontrada.</p>
          )}
        </div>
      )}

      {/* Instruções */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Próximos Passos</h3>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Crie as categorias necessárias no WordPress (Posts → Categories)</li>
          <li>Anote os IDs das categorias "blog" e "cases" da tabela acima</li>
          <li>Publique alguns posts de teste em cada categoria</li>
          <li>Teste a integração na página /blog</li>
        </ol>
      </div>

      {/* Categorias Recomendadas */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">🏷️ Categorias Recomendadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Para Blog:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• blog (categoria pai)</li>
              <li>• energia-solar</li>
              <li>• eficiencia-energetica</li>
              <li>• sustentabilidade</li>
              <li>• inovacao</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Para Cases:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• cases (categoria pai)</li>
              <li>• industrial</li>
              <li>• comercial</li>
              <li>• residencial</li>
              <li>• saude</li>
              <li>• educacao</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { FaSolarPanel, FaBolt, FaLightbulb, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const SolucoesPage = () => {
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  const solucoes = [
    {
      id: 'energia-solar',
      icone: <FaSolarPanel className="text-4xl text-blue-600" />,
      titulo: 'Energia Solar',
      subtitulo: 'Soluções fotovoltaicas completas',
      descricao: 'Desenvolvemos projetos de energia solar fotovoltaica para residências, comércios e indústrias, garantindo economia e sustentabilidade.',
      beneficios: [
        'Redução de até 95% na conta de energia',
        'Sistemas com garantia de 25 anos',
        'Financiamento facilitado',
        'Manutenção preventiva',
        'Monitoramento em tempo real'
      ],
      imagem: '/images/energia-solar.jpg'
    },
    {
      id: 'eficiencia-energetica',
      icone: <FaLightbulb className="text-4xl text-blue-600" />,
      titulo: 'Eficiência Energética',
      subtitulo: 'Otimização do consumo de energia',
      descricao: 'Implementamos soluções para reduzir o consumo de energia e aumentar a eficiência dos sistemas elétricos.',
      beneficios: [
        'Auditoria energética completa',
        'Modernização de sistemas',
        'Automação de processos',
        'Gestão de energia',
        'Redução de custos operacionais'
      ],
      imagem: '/images/eficiencia.jpg'
    },
    {
      id: 'projetos-eletricos',
      icone: <FaBolt className="text-4xl text-blue-600" />,
      titulo: 'Projetos Elétricos',
      subtitulo: 'Projetos elétricos completos',
      descricao: 'Desenvolvemos projetos elétricos residenciais, comerciais e industriais, seguindo todas as normas técnicas e de segurança.',
      beneficios: [
        'Projetos conforme NBR 5410',
        'Laudos técnicos',
        'Regularização de instalações',
        'Projetos de iluminação',
        'Projetos de aterramento'
      ],
      imagem: '/images/projetos.jpg'
    },
    {
      id: 'consultoria',
      icone: <FaChartLine className="text-4xl text-blue-600" />,
      titulo: 'Consultoria',
      subtitulo: 'Consultoria especializada em energia',
      descricao: 'Oferecemos consultoria técnica especializada para otimizar o uso de energia e implementar soluções sustentáveis.',
      beneficios: [
        'Análise de viabilidade',
        'Estudos de impacto',
        'Planejamento energético',
        'Gestão de contratos',
        'Assessoria técnica'
      ],
      imagem: '/images/consultoria.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Soluções</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Oferecemos soluções completas em energia para residências, comércios e indústrias
        </p>
      </div>

      {/* Grid de Soluções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {solucoes.map((solucao) => (
          <div
            key={solucao.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveSolution(activeSolution === solucao.id ? null : solucao.id)}
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{solucao.icone}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solucao.titulo}</h3>
                  <p className="text-gray-600 mb-4">{solucao.subtitulo}</p>
                  <p className="text-gray-600">{solucao.descricao}</p>
                </div>
              </div>
            </div>

            {/* Detalhes Expandidos */}
            {activeSolution === solucao.id && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Benefícios</h4>
                    <ul className="space-y-2">
                      {solucao.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <FaArrowRight className="text-blue-600 mr-2 flex-shrink-0" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={solucao.imagem}
                      alt={solucao.titulo}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={`/contato?assunto=${solucao.id}`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Solicitar Orçamento
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Pronto para começar seu projeto?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar você a encontrar a melhor solução em energia para seu negócio ou residência.
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
        >
          Fale com um Especialista
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default SolucoesPage; 
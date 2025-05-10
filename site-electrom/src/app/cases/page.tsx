'use client';

import { useState } from 'react';
import { FaIndustry, FaStore, FaHome, FaHospital, FaSchool, FaBuilding } from 'react-icons/fa';
import { FaArrowRight, FaChartLine, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';

const CasesPage = () => {
  const [activeSegment, setActiveSegment] = useState<string>('todos');

  const segmentos = [
    { id: 'todos', icone: <FaBuilding />, nome: 'Todos' },
    { id: 'industrial', icone: <FaIndustry />, nome: 'Industrial' },
    { id: 'comercial', icone: <FaStore />, nome: 'Comercial' },
    { id: 'residencial', icone: <FaHome />, nome: 'Residencial' },
    { id: 'saude', icone: <FaHospital />, nome: 'Saúde' },
    { id: 'educacao', icone: <FaSchool />, nome: 'Educação' }
  ];

  const cases = [
    {
      id: 1,
      titulo: 'Indústria Têxtil - Energia Solar',
      segmento: 'industrial',
      descricao: 'Implementação de sistema fotovoltaico em indústria têxtil de grande porte.',
      antes: {
        consumo: '120.000 kWh/mês',
        custo: 'R$ 72.000/mês',
        impacto: 'Alto consumo de energia da rede'
      },
      depois: {
        consumo: '6.000 kWh/mês',
        custo: 'R$ 3.600/mês',
        impacto: '95% de redução no consumo da rede'
      },
      resultados: [
        'Economia anual: R$ 820.800',
        'Redução de 1.368 toneladas de CO2/ano',
        'Payback: 3,5 anos',
        'ROI: 28,5% ao ano'
      ],
      imagem: '/images/case-industrial.jpg'
    },
    {
      id: 2,
      titulo: 'Shopping Center - Eficiência Energética',
      segmento: 'comercial',
      descricao: 'Modernização do sistema de iluminação e climatização em shopping center.',
      antes: {
        consumo: '450.000 kWh/mês',
        custo: 'R$ 270.000/mês',
        impacto: 'Sistema obsoleto e ineficiente'
      },
      depois: {
        consumo: '315.000 kWh/mês',
        custo: 'R$ 189.000/mês',
        impacto: '30% de redução no consumo'
      },
      resultados: [
        'Economia anual: R$ 972.000',
        'Redução de 1.620 toneladas de CO2/ano',
        'Payback: 2,8 anos',
        'ROI: 35,7% ao ano'
      ],
      imagem: '/images/case-comercial.jpg'
    },
    {
      id: 3,
      titulo: 'Condomínio Residencial - Energia Solar',
      segmento: 'residencial',
      descricao: 'Instalação de sistema fotovoltaico em condomínio de alto padrão.',
      antes: {
        consumo: '25.000 kWh/mês',
        custo: 'R$ 15.000/mês',
        impacto: 'Alto custo com energia comum'
      },
      depois: {
        consumo: '1.250 kWh/mês',
        custo: 'R$ 750/mês',
        impacto: '95% de redução no consumo da rede'
      },
      resultados: [
        'Economia anual: R$ 171.000',
        'Redução de 285 toneladas de CO2/ano',
        'Payback: 4,2 anos',
        'ROI: 23,8% ao ano'
      ],
      imagem: '/images/case-residencial.jpg'
    }
  ];

  const casesFiltrados = activeSegment === 'todos' 
    ? cases 
    : cases.filter(case_ => case_.segmento === activeSegment);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cases de Sucesso</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça alguns dos nossos projetos e os resultados alcançados para nossos clientes
        </p>
      </div>

      {/* Filtro de Segmentos */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {segmentos.map((segmento) => (
            <button
              key={segmento.id}
              onClick={() => setActiveSegment(segmento.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                activeSegment === segmento.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {segmento.icone}
              <span>{segmento.nome}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cases */}
      <div className="space-y-12">
        {casesFiltrados.map((case_) => (
          <div key={case_.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Imagem */}
              <div className="relative h-64 lg:h-full">
                <img
                  src={case_.imagem}
                  alt={case_.titulo}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{case_.titulo}</h3>
                <p className="text-gray-600 mb-6">{case_.descricao}</p>

                {/* Comparação Antes/Depois */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Antes</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Consumo: {case_.antes.consumo}</li>
                      <li>Custo: {case_.antes.custo}</li>
                      <li>Impacto: {case_.antes.impacto}</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Depois</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Consumo: {case_.depois.consumo}</li>
                      <li>Custo: {case_.depois.custo}</li>
                      <li>Impacto: {case_.depois.impacto}</li>
                    </ul>
                  </div>
                </div>

                {/* Resultados */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Resultados</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {case_.resultados.map((resultado, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <FaArrowRight className="text-blue-600 flex-shrink-0" />
                        <span>{resultado}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Quer resultados similares?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nossa equipe está pronta para desenvolver uma solução personalizada para o seu negócio.
        </p>
        <a
          href="/contato"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
        >
          Solicite uma Proposta
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default CasesPage; 
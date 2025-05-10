'use client';

import { FaLeaf, FaRecycle, FaSolarPanel, FaHandshake, FaChartLine, FaUsers, FaIndustry } from 'react-icons/fa';
import { FaArrowRight, FaTree, FaWater, FaWind } from 'react-icons/fa';

const SustentabilidadePage = () => {
  const impactosAmbientais = [
    {
      titulo: 'Redução de CO2',
      valor: '2.500',
      unidade: 'toneladas',
      descricao: 'Redução anual de emissões de CO2 através de nossos projetos',
      icone: <FaTree className="text-4xl text-green-600" />
    },
    {
      titulo: 'Energia Limpa',
      valor: '15.000',
      unidade: 'MWh',
      descricao: 'Energia limpa gerada anualmente por nossos sistemas',
      icone: <FaSolarPanel className="text-4xl text-green-600" />
    },
    {
      titulo: 'Água Economizada',
      valor: '8.000',
      unidade: 'm³',
      descricao: 'Volume de água economizado através de projetos de eficiência',
      icone: <FaWater className="text-4xl text-green-600" />
    }
  ];

  const ods = [
    {
      numero: 7,
      titulo: 'Energia Limpa e Acessível',
      descricao: 'Garantir acesso à energia barata, confiável, sustentável e renovável para todos.',
      icone: <FaSolarPanel className="text-4xl text-blue-600" />
    },
    {
      numero: 9,
      titulo: 'Indústria, Inovação e Infraestrutura',
      descricao: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável.',
      icone: <FaIndustry className="text-4xl text-blue-600" />
    },
    {
      numero: 13,
      titulo: 'Ação Contra a Mudança Global do Clima',
      descricao: 'Tomar medidas urgentes para combater a mudança climática e seus impactos.',
      icone: <FaLeaf className="text-4xl text-blue-600" />
    }
  ];

  const esg = {
    ambiental: [
      {
        titulo: 'Gestão de Resíduos',
        descricao: 'Programa completo de gestão e reciclagem de resíduos.',
        icone: <FaRecycle className="text-3xl text-green-600" />
      },
      {
        titulo: 'Eficiência Energética',
        descricao: 'Otimização do consumo de energia em todas as operações.',
        icone: <FaChartLine className="text-3xl text-green-600" />
      }
    ],
    social: [
      {
        titulo: 'Capacitação',
        descricao: 'Programas de treinamento e desenvolvimento profissional.',
        icone: <FaUsers className="text-3xl text-green-600" />
      },
      {
        titulo: 'Comunidade',
        descricao: 'Projetos sociais e ambientais em comunidades locais.',
        icone: <FaHandshake className="text-3xl text-green-600" />
      }
    ],
    governanca: [
      {
        titulo: 'Transparência',
        descricao: 'Políticas claras e relatórios de sustentabilidade.',
        icone: <FaChartLine className="text-3xl text-green-600" />
      },
      {
        titulo: 'Compliance',
        descricao: 'Conformidade com normas ambientais e sociais.',
        icone: <FaHandshake className="text-3xl text-green-600" />
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sustentabilidade</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprometidos com um futuro mais sustentável através de soluções energéticas inovadoras
        </p>
      </div>

      {/* Impacto Ambiental */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nosso Impacto Ambiental</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactosAmbientais.map((impacto, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">{impacto.icone}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{impacto.titulo}</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {impacto.valor} {impacto.unidade}
              </div>
              <p className="text-gray-600">{impacto.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ODS */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Objetivos de Desenvolvimento Sustentável
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ods.map((objetivo) => (
            <div key={objetivo.numero} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">{objetivo.icone}</div>
                <div>
                  <span className="text-sm font-semibold text-blue-600">ODS {objetivo.numero}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{objetivo.titulo}</h3>
                </div>
              </div>
              <p className="text-gray-600">{objetivo.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ESG */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Compromisso ESG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ambiental */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaLeaf className="text-green-600 mr-2" />
              Ambiental
            </h3>
            <div className="space-y-4">
              {esg.ambiental.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{item.icone}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.titulo}</h4>
                    <p className="text-gray-600 text-sm">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaUsers className="text-green-600 mr-2" />
              Social
            </h3>
            <div className="space-y-4">
              {esg.social.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{item.icone}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.titulo}</h4>
                    <p className="text-gray-600 text-sm">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governança */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaChartLine className="text-green-600 mr-2" />
              Governança
            </h3>
            <div className="space-y-4">
              {esg.governanca.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{item.icone}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.titulo}</h4>
                    <p className="text-gray-600 text-sm">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Junte-se a nós nesta jornada</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Vamos trabalhar juntos para criar um futuro mais sustentável através de soluções energéticas inovadoras.
        </p>
        <a
          href="/contato"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 transition-colors"
        >
          Fale Conosco
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default SustentabilidadePage; 
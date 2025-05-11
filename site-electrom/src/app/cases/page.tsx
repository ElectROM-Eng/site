'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaStore, FaHome, FaHospital, FaSchool, FaBuilding, FaArrowRight, FaChartLine, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';

// CSS para textura noise
const noiseStyle = {
  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.07\'/%3E%3C/svg%3E")',
  pointerEvents: 'none' as const,
  position: 'absolute' as const,
  inset: 0,
  zIndex: 0,
};

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

  // Animação Framer Motion
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0C1713] pb-16 overflow-hidden">
      {/* Gradiente radial centralizado */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0C1713]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full bg-[#7AA2E4] opacity-10 blur-3xl" />
        <div style={noiseStyle} />
      </div>
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-16">
        <header className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Cases de Sucesso
          </h1>
          <p className="text-lg md:text-xl text-[#7AA2E4] font-medium max-w-2xl mx-auto">
            Conheça nossos projetos e o impacto real para cada cliente
          </p>
        </header>

        {/* Filtro de Segmentos */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {segmentos.map((segmento) => (
            <motion.button
              key={segmento.id}
              onClick={() => setActiveSegment(segmento.id)}
              variants={item}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border-2 transition-all duration-200 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7AA2E4] focus:ring-offset-2
                ${activeSegment === segmento.id
                  ? 'bg-[#7AA2E4] border-[#7AA2E4] text-white shadow-md scale-105'
                  : 'bg-white border-white text-[#0C1713] hover:bg-[#eaf1fa] hover:border-[#7AA2E4]'}
              `}
            >
              {segmento.icone}
              <span>{segmento.nome}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Cases */}
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {casesFiltrados.map((case_, idx) => (
            <motion.div
              key={case_.id}
              variants={item}
              whileHover={{ scale: 1.015, boxShadow: '0 8px 32px 0 rgba(122,162,228,0.10)' }}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/30"
            >
              {/* Imagem */}
              <div className="relative lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={case_.imagem}
                  alt={case_.titulo}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#7AA2E4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {segmentos.find(s => s.id === case_.segmento)?.nome}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0C1713] mb-2 leading-tight">{case_.titulo}</h3>
                  <p className="text-[#0C1713]/80 mb-6 text-base">{case_.descricao}</p>

                  {/* Comparação Antes/Depois */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#eaf1fa] p-5 rounded-xl flex flex-col gap-2 shadow-sm">
                      <span className="font-semibold text-[#0C1713] mb-1 flex items-center gap-2"><FaLeaf className="text-[#7AA2E4]" /> Antes</span>
                      <ul className="space-y-1 text-[#0C1713]/80 text-sm">
                        <li><b>Consumo:</b> {case_.antes.consumo}</li>
                        <li><b>Custo:</b> {case_.antes.custo}</li>
                        <li><b>Impacto:</b> {case_.antes.impacto}</li>
                      </ul>
                    </div>
                    <div className="bg-[#7AA2E4]/10 p-5 rounded-xl flex flex-col gap-2 shadow-sm">
                      <span className="font-semibold text-[#0C1713] mb-1 flex items-center gap-2"><FaChartLine className="text-[#7AA2E4]" /> Depois</span>
                      <ul className="space-y-1 text-[#0C1713]/80 text-sm">
                        <li><b>Consumo:</b> {case_.depois.consumo}</li>
                        <li><b>Custo:</b> {case_.depois.custo}</li>
                        <li><b>Impacto:</b> {case_.depois.impacto}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Resultados */}
                  <div>
                    <h4 className="font-semibold text-[#0C1713] mb-3">Resultados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {case_.resultados.map((resultado, index) => (
                        <div key={index} className="flex items-center gap-2 text-[#0C1713]/90 bg-[#eaf1fa] rounded-lg px-3 py-2 font-medium shadow-sm">
                          <FaArrowRight className="text-[#7AA2E4] flex-shrink-0" />
                          <span>{resultado}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#7AA2E4] text-white font-bold rounded-lg shadow-md hover:bg-[#5e8fd1] transition-colors text-base"
                  >
                    Solicitar Diagnóstico
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-[#7AA2E4] rounded-2xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Quer resultados similares?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Nossa equipe está pronta para desenvolver uma solução personalizada para o seu negócio.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-white hover:text-[#7AA2E4] transition-colors shadow-md"
          >
            Solicite uma Proposta
            <FaArrowRight />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default CasesPage; 
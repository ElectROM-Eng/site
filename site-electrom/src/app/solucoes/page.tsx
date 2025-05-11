'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSolarPanel, FaBolt, FaLightbulb, FaChartLine, FaArrowRight, FaCheckCircle, FaClipboardList, FaCogs, FaUserTie, FaBalanceScale, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';

const solucoes = [
  {
    id: 'energia-solar',
    icone: <FaSolarPanel className="text-4xl text-[#7AA2E4]" />,
    titulo: 'Energia Solar Empresarial',
    subtitulo: 'Reduza até 95% da sua conta de luz com sistemas solares personalizados.',
    detalhes: [
      'Projetos industriais, rurais e comerciais',
      'Monitoramento remoto e manutenção preventiva',
      'Financiamento e payback mapeado'
    ],
    cor: 'from-[#7AA2E4] to-[#4e6fae]'
  },
  {
    id: 'eficiencia',
    icone: <FaLightbulb className="text-4xl text-[#7AA2E4]" />,
    titulo: 'Eficiência Energética',
    subtitulo: 'Otimize seus processos e economize sem trocar de fornecedor de energia.',
    detalhes: [
      'Diagnóstico completo de consumo',
      'Retrofit de iluminação, motores, climatização',
      'Redução média de 20 a 35% no gasto energético'
    ],
    cor: 'from-[#7AA2E4] to-[#7adfa4]'
  },
  {
    id: 'projetos-eletricos',
    icone: <FaBolt className="text-4xl text-[#7AA2E4]" />,
    titulo: 'Projetos Elétricos de Alta Performance',
    subtitulo: 'Segurança, conformidade e desempenho em instalações elétricas.',
    detalhes: [
      'Projetos SPDA, subestações, painéis',
      'NR10, ART, laudos e comissionamentos',
      'Adequações para expansão e auditoria'
    ],
    cor: 'from-[#7AA2E4] to-[#a4b8df]'
  },
  {
    id: 'consultoria',
    icone: <FaChartLine className="text-4xl text-[#7AA2E4]" />,
    titulo: 'Consultoria e Gestão Energética',
    subtitulo: 'Estratégia e acompanhamento técnico para grandes consumidores.',
    detalhes: [
      'Gestão de faturas e contratos',
      'Planejamento de demanda e energia livre',
      'Suporte regulatório (ANEEL, ISO)'
    ],
    cor: 'from-[#7AA2E4] to-[#7adfa4]'
  }
];

export default function SolucoesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[#0C1713] min-h-screen w-full text-white pb-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">Soluções Inteligentes em Energia para Empresas de Verdade</h1>
        <p className="text-lg md:text-xl text-[#7AA2E4] font-medium mb-8 max-w-2xl mx-auto">
          Engenharia, tecnologia e resultados que reduzem custos e aumentam a autonomia energética.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/contato" className="px-8 py-3 rounded-lg bg-[#7AA2E4] text-white font-bold shadow-md hover:bg-[#5e8fd1] transition">Solicitar Diagnóstico Gratuito</Link>
          <Link href="/contato" className="px-8 py-3 rounded-lg border-2 border-[#7AA2E4] text-[#7AA2E4] font-bold shadow-md hover:bg-[#7AA2E4] hover:text-white transition">Falar com um Especialista</Link>
        </div>
      </section>

      {/* Grade de Soluções */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solucoes.map((solucao) => (
            <motion.div
              key={solucao.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative group bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-start cursor-pointer hover:scale-[1.03] transition-transform border-2 border-transparent hover:border-[#7AA2E4]`}
              onClick={() => setActive(active === solucao.id ? null : solucao.id)}
            >
              <div className="mb-4">{solucao.icone}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{solucao.titulo}</h3>
              <p className="text-[#7AA2E4] font-medium mb-2">{solucao.subtitulo}</p>
              <AnimatePresence>
                {active === solucao.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full mt-2"
                  >
                    <ul className="mb-4 space-y-2">
                      {solucao.detalhes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/90">
                          <FaCheckCircle className="text-[#7AA2E4]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contato?assunto=${solucao.id}`}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-[#7AA2E4] text-white font-bold rounded-lg shadow-md hover:bg-[#5e8fd1] transition-colors"
                    >
                      Solicitar Diagnóstico
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparativo com o mercado */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Por que escolher a Electrom?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center rounded-xl overflow-hidden shadow-lg bg-white/10">
            <thead>
              <tr className="text-[#7AA2E4]">
                <th className="py-3 px-2 font-bold">Item</th>
                <th className="py-3 px-2 font-bold">Electrom</th>
                <th className="py-3 px-2 font-bold">Concorrente comum</th>
              </tr>
            </thead>
            <tbody className="text-white/90">
              <tr>
                <td className="py-2 px-2">Engenheiros especializados</td>
                <td className="py-2 px-2"><FaCheckCircle className="mx-auto text-[#7AA2E4]" /></td>
                <td className="py-2 px-2 text-gray-400">—</td>
              </tr>
              <tr className="bg-white/5">
                <td className="py-2 px-2">Diagnóstico técnico gratuito</td>
                <td className="py-2 px-2"><FaCheckCircle className="mx-auto text-[#7AA2E4]" /></td>
                <td className="py-2 px-2 text-gray-400">—</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Projetos 100% sob medida</td>
                <td className="py-2 px-2"><FaCheckCircle className="mx-auto text-[#7AA2E4]" /></td>
                <td className="py-2 px-2 text-[#7AA2E4]">±</td>
              </tr>
              <tr className="bg-white/5">
                <td className="py-2 px-2">Suporte pós-instalação</td>
                <td className="py-2 px-2"><FaCheckCircle className="mx-auto text-[#7AA2E4]" /></td>
                <td className="py-2 px-2 text-[#7AA2E4]">±</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mini Jornada */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Como funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaClipboardList className="text-3xl text-[#7AA2E4] mb-2" />
            <span className="font-bold mb-1">Diagnóstico gratuito</span>
            <span className="text-white/80 text-sm">Análise técnica e personalizada</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-3xl text-[#7AA2E4] mb-2" />
            <span className="font-bold mb-1">Projeto técnico</span>
            <span className="text-white/80 text-sm">Soluções sob medida para sua empresa</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUserTie className="text-3xl text-[#7AA2E4] mb-2" />
            <span className="font-bold mb-1">Execução e entrega</span>
            <span className="text-white/80 text-sm">Equipe própria e acompanhamento total</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaBalanceScale className="text-3xl text-[#7AA2E4] mb-2" />
            <span className="font-bold mb-1">Monitoramento e suporte</span>
            <span className="text-white/80 text-sm">Resultados garantidos e pós-venda ativo</span>
          </div>
        </div>
      </section>

      {/* Depoimento/Números */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white/10 rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
          <FaQuoteLeft className="text-[#7AA2E4] text-3xl mb-4" />
          <p className="text-lg text-white/90 mb-4">“Reduzimos 40% do consumo da planta industrial com o projeto da Electrom.”</p>
          <span className="block text-[#7AA2E4] font-semibold">Gerente de Operações</span>
          <span className="block text-white/60 text-sm">Indústria Plástica SP</span>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-16 bg-[#7AA2E4] bg-gradient-to-br from-[#7AA2E4] to-[#0C1713]/80 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg">Quer saber quanto sua empresa pode economizar?</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">Receba um diagnóstico técnico gratuito com retorno estimado.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contato" className="px-8 py-3 rounded-lg bg-white text-[#7AA2E4] font-bold shadow-md hover:bg-[#eaf1fa] transition">Solicitar Diagnóstico</Link>
          <Link href="/contato" className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold shadow-md hover:bg-white hover:text-[#7AA2E4] transition">Fale com Especialista no WhatsApp</Link>
        </div>
      </section>
    </div>
  );
} 
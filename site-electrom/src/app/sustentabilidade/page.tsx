'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaIndustry, FaHandshake, FaSolarPanel, FaUsers, FaShieldAlt, FaCoins, FaCertificate, FaChartPie, FaClipboardCheck, FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function SustentabilidadePage() {
  return (
    <div className="bg-[#0C1713] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/solar-panels.jpg"
            alt="Painéis Solares"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1713]/80 to-[#0C1713]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Energia com Propósito: Sustentabilidade em Cada Projeto
          </h1>
          <p className="text-xl md:text-2xl text-[#7AA2E4] mb-8">
            A Electrom une engenharia, inovação e compromisso ambiental para entregar soluções com impacto mensurável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#impacto" className="px-8 py-3 bg-[#7AA2E4] text-white font-bold rounded-lg hover:bg-[#5e8fd1] transition">
              Conheça nosso impacto
            </Link>
            <Link href="/contato" className="px-8 py-3 border-2 border-[#7AA2E4] text-[#7AA2E4] font-bold rounded-lg hover:bg-[#7AA2E4] hover:text-white transition">
              Solicite Diagnóstico Sustentável
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Impacto Ambiental em Números */}
      <section id="impacto" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Impacto Ambiental em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaSolarPanel className="text-4xl text-[#7AA2E4]" />, value: "250 GWh", label: "Energia limpa gerada" },
              { icon: <FaLeaf className="text-4xl text-[#7AA2E4]" />, value: "180 mil", label: "Toneladas de CO₂ evitadas" },
              { icon: <FaChartLine className="text-4xl text-[#7AA2E4]" />, value: "35%", label: "Redução média no consumo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 rounded-xl p-8 text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-[#7AA2E4]">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS da ONU */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ODS da ONU: Nosso Compromisso Global</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ODS 7 – Energia Limpa e Acessível",
                description: "Implantação de geração solar e eficiência em larga escala",
                icon: <FaSolarPanel className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "ODS 9 – Indústria, Inovação e Infraestrutura",
                description: "Projetos técnicos sob medida com inovação",
                icon: <FaIndustry className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "ODS 12 – Consumo e Produção Responsáveis",
                description: "Redução de desperdícios e consumo inteligente",
                icon: <FaChartLine className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "ODS 13 – Ação contra a Mudança Global do Clima",
                description: "Evitamos milhares de toneladas de CO₂ com nossos projetos",
                icon: <FaLeaf className="text-3xl text-[#7AA2E4]" />
              }
            ].map((ods, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0">{ods.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{ods.title}</h3>
                  <p className="text-white/80">{ods.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG na Prática */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ESG na Prática: Não é discurso, é processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E (Ambiental)",
                description: "Diagnóstico energético, energia solar, projetos com impacto validado.",
                icon: <FaLeaf className="text-4xl text-[#7AA2E4]" />
              },
              {
                title: "S (Social)",
                description: "Capacitação da equipe técnica, diversidade, parcerias comunitárias.",
                icon: <FaUsers className="text-4xl text-[#7AA2E4]" />
              },
              {
                title: "G (Governança)",
                description: "Conformidade legal, ARTs, laudos e código de conduta profissional.",
                icon: <FaShieldAlt className="text-4xl text-[#7AA2E4]" />
              }
            ].map((esg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 rounded-xl p-8 text-center"
              >
                <div className="mb-4">{esg.icon}</div>
                <h3 className="text-xl font-bold mb-4">{esg.title}</h3>
                <p className="text-white/80">{esg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Créditos de Carbono */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Créditos de Carbono e Valorização Ambiental</h2>
          <p className="text-xl text-center mb-12">Transformamos economia de energia em ativos ambientais.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Redução de emissões",
                description: "Cada projeto evita CO₂ com base técnica e pode ser convertido em créditos",
                icon: <FaChartLine className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "Certificação e Registro",
                description: "Parcerias com plataformas certificadoras e registradoras reconhecidas",
                icon: <FaCertificate className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "Monetização e ESG",
                description: "Uso dos créditos para compensação de emissões ou venda no mercado voluntário",
                icon: <FaCoins className="text-3xl text-[#7AA2E4]" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 rounded-xl p-6"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center mb-12">
            <p className="text-xl italic mb-4">"Geramos 410 créditos de carbono em 18 meses com apoio da Electrom."</p>
            <p className="text-[#7AA2E4] font-semibold">— Gerente de Sustentabilidade, Agro SP</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="px-8 py-3 bg-[#7AA2E4] text-white font-bold rounded-lg hover:bg-[#5e8fd1] transition">
              Quero avaliar meu projeto
            </Link>
            <Link href="/contato" className="px-8 py-3 border-2 border-[#7AA2E4] text-[#7AA2E4] font-bold rounded-lg hover:bg-[#7AA2E4] hover:text-white transition">
              Falar com Especialista ESG
            </Link>
          </div>
        </div>
      </section>

      {/* Sustentabilidade Incorporada */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sustentabilidade Incorporada ao Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Diagnóstico Técnico",
                description: "Estimativa de impacto ambiental",
                icon: <FaClipboardCheck className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "Análise de Retorno",
                description: "Energético + ambiental",
                icon: <FaChartPie className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "Relatório de Impacto",
                description: "Para uso em ESG",
                icon: <FaFileAlt className="text-3xl text-[#7AA2E4]" />
              },
              {
                title: "Certificação",
                description: "Possibilidade de créditos de carbono",
                icon: <FaCertificate className="text-3xl text-[#7AA2E4]" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Depoimentos e Reconhecimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Além de economia, conseguimos inserir os dados dos projetos da Electrom no nosso relatório de sustentabilidade anual.",
                author: "Diretora de ESG, Grupo Industrial MG"
              },
              {
                quote: "Ajudou não só no financeiro, mas na reputação da empresa com investidores.",
                author: "CEO, Startup Energia Verde"
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 rounded-xl p-8"
              >
                <p className="text-xl italic mb-4">"{depoimento.quote}"</p>
                <p className="text-[#7AA2E4] font-semibold">— {depoimento.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#7AA2E4] to-[#0C1713]/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça sua energia valer mais
          </h2>
          <p className="text-xl mb-8">
            Sustentabilidade não é custo. É investimento com retorno triplo: econômico, ambiental e reputacional. Fale com nossos engenheiros e receba um diagnóstico com cálculo de impacto e viabilidade de certificação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="px-8 py-3 bg-white text-[#7AA2E4] font-bold rounded-lg hover:bg-[#eaf1fa] transition">
              Solicitar Diagnóstico Sustentável
            </Link>
            <Link href="/contato" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#7AA2E4] transition flex items-center justify-center gap-2">
              <FaWhatsapp className="text-xl" />
              Falar com Engenheiro no WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
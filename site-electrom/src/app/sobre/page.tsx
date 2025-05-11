'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaLeaf, FaLightbulb, FaHandshake, FaUserTie, FaSearch, FaRecycle, FaQuoteLeft } from 'react-icons/fa';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function SobrePage() {
  // Ref para a seção da linha do tempo
  const timelineRef = useRef<HTMLDivElement>(null);
  // Scroll progress da seção
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  });
  // Quantidade máxima de deslocamento horizontal (ajuste conforme o conteúdo)
  const maxX = 500; // px (ajuste para garantir que o início da timeline fique visível)
  // Transformação do scroll vertical em movimento horizontal
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <div className="bg-[#0C1713] min-h-screen w-full text-white">
      {/* 1. Hero / Manifesto Visual */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 text-center bg-gradient-to-b from-[#0C1713] via-[#0C1713] to-[#7AA2E4]/10">
        {/* Imagem ou vídeo hero */}
        <div className="absolute inset-0 z-0">
          {/* <img src="/images/hero-solar.jpg" alt="Instalação solar" className="object-cover w-full h-full opacity-30" /> */}
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">25 Anos de Energia com Propósito</h1>
          <p className="text-xl md:text-2xl text-[#7AA2E4] font-medium mb-8 max-w-2xl mx-auto">
            Sustentabilidade, eficiência e inovação guiando empresas rumo à autonomia energética.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/solucoes" className="px-8 py-3 rounded-lg bg-[#7AA2E4] text-white font-bold shadow-md hover:bg-[#5e8fd1] transition">Conheça nossas soluções</a>
            <a href="/contato" className="px-8 py-3 rounded-lg border-2 border-[#7AA2E4] text-[#7AA2E4] font-bold shadow-md hover:bg-[#7AA2E4] hover:text-white transition">Fale com um especialista</a>
          </div>
        </div>
      </section>

      {/* 2. Missão, Visão e Propósito */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-lg">
          <FaLightbulb className="text-[#7AA2E4] text-3xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Missão</h3>
          <p className="text-white/80">Transformar energia em inteligência, entregando soluções sustentáveis, eficientes e financeiramente viáveis.</p>
        </div>
        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-lg">
          <FaBolt className="text-[#7AA2E4] text-3xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Visão</h3>
          <p className="text-white/80">Ser referência nacional como "Engenharia das Energias", aliando tecnologia, impacto ambiental e retorno real.</p>
        </div>
        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-lg">
          <FaLeaf className="text-[#7AA2E4] text-3xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Propósito</h3>
          <p className="text-white/80">Ajudar empresas a conquistarem autonomia energética com transparência e excelência técnica.</p>
        </div>
      </section>

      {/* 3. Linha do Tempo Interativa */}
      <section ref={timelineRef} className="h-[350vh] relative">
        <div className="sticky top-0 h-screen flex items-center bg-[#0C1713] overflow-hidden">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Nossa Jornada</h2>
            <div className="relative h-56 md:h-64">
              <motion.div style={{ x }} className="flex gap-12 pl-[calc(20vw-90px)]">
                {/* Marco 1997 */}
                <div className="flex flex-col items-center min-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#7AA2E4] flex items-center justify-center text-xl font-bold text-white shadow-lg mb-2">1997</div>
                  <div className="bg-white/10 rounded-xl p-4 text-center text-white/90 shadow-md w-full">
                    Fundação da Electrom Engenharia
                  </div>
                </div>
                {/* Linha */}
                <div className="flex-1 h-1 bg-[#7AA2E4]/40 self-center" style={{ minWidth: 40, maxWidth: 80 }} />
                {/* Marco 2005 */}
                <div className="flex flex-col items-center min-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#7AA2E4] flex items-center justify-center text-xl font-bold text-white shadow-lg mb-2">2005</div>
                  <div className="bg-white/10 rounded-xl p-4 text-center text-white/90 shadow-md w-full">
                    Primeiro projeto solar industrial
                  </div>
                </div>
                <div className="flex-1 h-1 bg-[#7AA2E4]/40 self-center" style={{ minWidth: 40, maxWidth: 80 }} />
                {/* Marco 2010 */}
                <div className="flex flex-col items-center min-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#7AA2E4] flex items-center justify-center text-xl font-bold text-white shadow-lg mb-2">2010</div>
                  <div className="bg-white/10 rounded-xl p-4 text-center text-white/90 shadow-md w-full">
                    Expansão para consultorias e diagnósticos energéticos
                  </div>
                </div>
                <div className="flex-1 h-1 bg-[#7AA2E4]/40 self-center" style={{ minWidth: 40, maxWidth: 80 }} />
                {/* Marco 2020 */}
                <div className="flex flex-col items-center min-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#7AA2E4] flex items-center justify-center text-xl font-bold text-white shadow-lg mb-2">2020</div>
                  <div className="bg-white/10 rounded-xl p-4 text-center text-white/90 shadow-md w-full">
                    1000+ projetos entregues
                  </div>
                </div>
                <div className="flex-1 h-1 bg-[#7AA2E4]/40 self-center" style={{ minWidth: 40, maxWidth: 80 }} />
                {/* Marco 2024 */}
                <div className="flex flex-col items-center min-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#7AA2E4] flex items-center justify-center text-xl font-bold text-white shadow-lg mb-2">2024</div>
                  <div className="bg-white/10 rounded-xl p-4 text-center text-white/90 shadow-md w-full">
                    Reposicionamento como "Engenharia das Energias"
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Valores que nos movem */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Valores que nos movem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
            <FaSearch className="text-[#7AA2E4] text-2xl mb-2" />
            <h4 className="font-semibold mb-1">Transparência Radical</h4>
            <p className="text-white/80 text-sm">Sempre falamos o que precisa ser dito.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
            <FaRecycle className="text-[#7AA2E4] text-2xl mb-2" />
            <h4 className="font-semibold mb-1">Sustentabilidade com Resultado</h4>
            <p className="text-white/80 text-sm">Economia para o cliente, impacto para o planeta.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
            <FaLightbulb className="text-[#7AA2E4] text-2xl mb-2" />
            <h4 className="font-semibold mb-1">Inovação com Propósito</h4>
            <p className="text-white/80 text-sm">Não seguimos tendências, criamos soluções.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
            <FaHandshake className="text-[#7AA2E4] text-2xl mb-2" />
            <h4 className="font-semibold mb-1">Compromisso de Longo Prazo</h4>
            <p className="text-white/80 text-sm">Relacionamentos duradouros com clientes e parceiros.</p>
          </div>
        </div>
      </section>

      {/* 5. Quem está à frente da Electrom */}
      <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-4 border-[#7AA2E4] shadow-lg">
          {/* <img src=\"/images/joao-mendes.jpg\" alt=\"Eng. João Mendes\" className=\"object-cover w-full h-full\" /> */}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Eng. João Mendes</h3>
          <span className="block text-[#7AA2E4] font-semibold mb-2">Fundador e Diretor Técnico</span>
          <blockquote className="italic text-white/80 mb-2 border-l-4 border-[#7AA2E4] pl-4">
            "Desde que comecei na engenharia elétrica, acreditei que energia deve ser inteligente, sustentável e estratégica. A Electrom nasceu desse propósito. São 25 anos, mais de mil projetos, e o mesmo compromisso: excelência com impacto real."
          </blockquote>
          <div className="text-white/70 text-sm mb-1">CREA-SP 000000000 | Especialista em sistemas fotovoltaicos | Referência técnica no setor industrial</div>
          <div className="text-white/70 text-sm">📍 São Paulo - SP | 📞 Disponível para entrevistas, palestras e diagnósticos técnicos</div>
        </div>
      </section>

      {/* 6. Nosso diferencial técnico */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Nosso diferencial técnico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">1000+</span>
            <span className="block text-white/80 text-sm">projetos entregues</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">250 GWh</span>
            <span className="block text-white/80 text-sm">economizados</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">300</span>
            <span className="block text-white/80 text-sm">empresas atendidas</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">98%</span>
            <span className="block text-white/80 text-sm">satisfação no pós-venda</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">100%</span>
            <span className="block text-white/80 text-sm">engenheiros na equipe</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <span className="block text-2xl font-bold text-[#7AA2E4]">Expertise</span>
            <span className="block text-white/80 text-sm">solar, eficiência e indústria</span>
          </div>
        </div>
      </section>

      {/* 7. Nossa Equipe */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">Nossa Equipe</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Exemplo de card de equipe */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 group transition">
            {/* <img src=\"/images/equipe1.jpg\" alt=\"Nome\" className=\"w-full h-40 object-cover grayscale group-hover:grayscale-0 transition\" /> */}
            <div className="p-4 text-center">
              <h4 className="font-bold text-white">Nome Sobrenome</h4>
              <span className="block text-[#7AA2E4] text-sm">Cargo</span>
            </div>
          </div>
          {/* ...outros cards */}
        </div>
        <p className="text-center text-white/60 mt-6 italic">"Somos uma engenharia feita por engenheiros. Cada projeto é assinado por quem entende de verdade."</p>
      </section>

      {/* 8. Depoimentos ou Citações */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#7AA2E4]">O que nossos clientes dizem</h2>
        {/* Carousel de depoimentos */}
        <div className="relative">
          <div className="bg-white/10 rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
            <FaQuoteLeft className="text-[#7AA2E4] text-3xl mb-4" />
            <p className="text-lg text-white/90 mb-4">"A Electrom entregou mais do que prometeu. Reduzimos 47% do custo energético e ganhamos autonomia."</p>
            <span className="block text-[#7AA2E4] font-semibold">Diretor de Operações</span>
            <span className="block text-white/60 text-sm">Indústria Alimentícia SP</span>
          </div>
        </div>
      </section>

      {/* 9. CTA Final */}
      <section className="w-full py-16 bg-[#7AA2E4] bg-gradient-to-br from-[#7AA2E4] to-[#0C1713]/80 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg">Vamos transformar energia em valor para sua empresa?</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">Fale agora com um especialista e receba um diagnóstico gratuito.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contato" className="px-8 py-3 rounded-lg bg-white text-[#7AA2E4] font-bold shadow-md hover:bg-[#eaf1fa] transition">Solicitar Diagnóstico</a>
          <a href="/solucoes" className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold shadow-md hover:bg-white hover:text-[#7AA2E4] transition">Conheça Nossas Soluções</a>
        </div>
      </section>
    </div>
  );
} 
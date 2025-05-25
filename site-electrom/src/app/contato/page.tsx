'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaUserTie, FaClock, FaLightbulb } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { ref: contactRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre soluções em energia.');
  const whatsappLink = `https://wa.me/5511987654321?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen w-full bg-[#0C1713] pb-16">
      <section className="max-w-4xl mx-auto px-4 pt-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Fale com engenheiros especialistas em energia
          </h1>
          <p className="text-lg md:text-xl text-[#7AA2E4] font-medium max-w-2xl mx-auto">
            Mais de 30 anos em projetos de energia solar e elétrica. Receba um diagnóstico gratuito com quem entende de eficiência e retorno.
          </p>
        </header>

        {/* Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-5">
            <FaClock className="text-[#7AA2E4] text-2xl" />
            <div>
              <span className="block font-semibold text-[#0C1713]">Retorno em até 24h úteis</span>
              <span className="block text-gray-500 text-sm">Atendimento ágil e eficiente</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-5">
            <FaUserTie className="text-[#7AA2E4] text-2xl" />
            <div>
              <span className="block font-semibold text-[#0C1713]">Engenheiros Especializados</span>
              <span className="block text-gray-500 text-sm">Equipe técnica qualificada</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-5">
            <FaLightbulb className="text-[#7AA2E4] text-2xl" />
            <div>
              <span className="block font-semibold text-[#0C1713]">Soluções Personalizadas</span>
              <span className="block text-gray-500 text-sm">Foco em economia e sustentabilidade</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contatos */}
          <motion.div 
            ref={contactRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8 justify-between"
          >
            <div className="space-y-5">
              <a href="tel:+551112345678" className="flex items-center gap-3 group transition">
                <FaPhone className="text-[#7AA2E4] text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[#0C1713] font-medium">(11) 1234-5678</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group transition">
                <FaWhatsapp className="text-[#25D366] text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[#0C1713] font-medium">(11) 98765-4321</span>
              </a>
              <a href="mailto:contato@electrom.com.br" className="flex items-center gap-3 group transition">
                <FaEnvelope className="text-[#7AA2E4] text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[#0C1713] font-medium">contato@electrom.com.br</span>
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#7AA2E4] text-xl" />
                <span className="text-[#0C1713] font-medium leading-tight">
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <span className="block text-[#0C1713] font-semibold mb-1">Horário de Atendimento</span>
              <span className="block text-gray-500 text-sm">Segunda a Sexta: 8h às 18h</span>
              <span className="block text-gray-500 text-sm">Sábado: 9h às 13h</span>
              <span className="block text-[#7AA2E4] text-xs mt-2">Atendimento humano, sem robô</span>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-xl font-bold text-[#0C1713] mb-6">Solicite um diagnóstico gratuito</h2>
            {submitSuccess ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-[#0C1713] mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    onFocus={() => handleFocus('nome')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all duration-200 bg-white text-[#0C1713] placeholder-gray-400 ${focusedField === 'nome' ? 'border-[#7AA2E4] ring-2 ring-[#7AA2E4]' : 'border-gray-200 focus:border-[#7AA2E4]'}`}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0C1713] mb-1">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all duration-200 bg-white text-[#0C1713] placeholder-gray-400 ${focusedField === 'email' ? 'border-[#7AA2E4] ring-2 ring-[#7AA2E4]' : 'border-gray-200 focus:border-[#7AA2E4]'}`}
                    placeholder="Seu melhor e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-[#0C1713] mb-1">Telefone *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('telefone')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all duration-200 bg-white text-[#0C1713] placeholder-gray-400 ${focusedField === 'telefone' ? 'border-[#7AA2E4] ring-2 ring-[#7AA2E4]' : 'border-gray-200 focus:border-[#7AA2E4]'}`}
                    placeholder="(DDD) 90000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-semibold text-[#0C1713] mb-1">Assunto *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    onFocus={() => handleFocus('assunto')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all duration-200 bg-white text-[#0C1713] ${focusedField === 'assunto' ? 'border-[#7AA2E4] ring-2 ring-[#7AA2E4]' : 'border-gray-200 focus:border-[#7AA2E4]'}`}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="energia-solar">Energia Solar</option>
                    <option value="eficiencia-energetica">Eficiência Energética</option>
                    <option value="projetos-eletricos">Projetos Elétricos</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-[#0C1713] mb-1">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    onFocus={() => handleFocus('mensagem')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all duration-200 bg-white text-[#0C1713] placeholder-gray-400 ${focusedField === 'mensagem' ? 'border-[#7AA2E4] ring-2 ring-[#7AA2E4]' : 'border-gray-200 focus:border-[#7AA2E4]'}`}
                    placeholder="Descreva sua necessidade ou dúvida"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7AA2E4] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-[#5e8fd1] focus:outline-none focus:ring-2 focus:ring-[#7AA2E4] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Diagnóstico Gratuito'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Call final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mt-14 text-center"
        >
          <p className="text-lg text-white/80">
            Ainda com dúvidas? Envie sua pergunta e receba uma resposta de especialista em até 1 dia útil.
          </p>
        </motion.div>
      </section>

      {/* WhatsApp Flutuante */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1da851] transition-colors md:hidden z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Fale no WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </div>
  );
};

export default ContactPage; 
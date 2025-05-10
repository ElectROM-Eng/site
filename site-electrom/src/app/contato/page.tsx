'use client';

import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aqui você implementará a lógica de envio do formulário
    // Por exemplo, usando uma API ou serviço de e-mail
    
    // Simulando envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600">
          Estamos prontos para ajudar você a encontrar a melhor solução em energia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-600">(11) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-600 text-xl" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-gray-600">contato@electrom.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-gray-600">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Horário de Atendimento</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-600">Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Fale com um Especialista</h2>
          
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
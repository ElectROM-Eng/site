'use client';

import { FaLightbulb, FaHandshake, FaChartLine, FaUsers, FaLeaf, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  const valores = [
    {
      icone: <FaLightbulb className="text-4xl text-blue-600" />,
      titulo: 'Inovação',
      descricao: 'Buscamos constantemente novas soluções e tecnologias para oferecer o melhor em energia sustentável.'
    },
    {
      icone: <FaHandshake className="text-4xl text-blue-600" />,
      titulo: 'Compromisso',
      descricao: 'Nos dedicamos a entregar excelência em cada projeto, mantendo o compromisso com nossos clientes.'
    },
    {
      icone: <FaChartLine className="text-4xl text-blue-600" />,
      titulo: 'Eficiência',
      descricao: 'Desenvolvemos soluções que maximizam a eficiência energética e reduzem custos operacionais.'
    },
    {
      icone: <FaUsers className="text-4xl text-blue-600" />,
      titulo: 'Equipe',
      descricao: 'Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a excelência.'
    },
    {
      icone: <FaLeaf className="text-4xl text-blue-600" />,
      titulo: 'Sustentabilidade',
      descricao: 'Promovemos práticas sustentáveis e soluções que contribuem para um futuro mais verde.'
    },
    {
      icone: <FaAward className="text-4xl text-blue-600" />,
      titulo: 'Qualidade',
      descricao: 'Garantimos a mais alta qualidade em todos os nossos serviços e projetos.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Mais de 25 anos de experiência em engenharia elétrica, transformando o futuro da energia com soluções sustentáveis e inovadoras.
        </p>
      </div>

      {/* História e Legado */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Jornada</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Fundada em 1998, a Electrom Engenharia nasceu com a missão de revolucionar o setor de energia elétrica no Brasil. 
                Começamos como uma pequena empresa de projetos elétricos e, ao longo dos anos, expandimos nossas operações para 
                incluir soluções completas em energia solar e eficiência energética.
              </p>
              <p>
                Hoje, somos referência no mercado, com mais de 1.000 projetos entregues e uma equipe altamente qualificada de 
                engenheiros e técnicos especializados.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="/images/sobre-historia.jpg"
              alt="História da Electrom"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{valor.icone}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linha do Tempo */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa História em Destaque</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
          
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="ml-8 md:ml-0 md:flex md:justify-between md:items-center">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-gray-900">1998</h3>
                  <p className="text-gray-600">Fundação da Electrom Engenharia</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-600">
                    Início das operações com foco em projetos elétricos residenciais e comerciais.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="ml-8 md:ml-0 md:flex md:justify-between md:items-center">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-gray-900">2005</h3>
                  <p className="text-gray-600">Expansão para Projetos Industriais</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-600">
                    Início dos trabalhos com grandes indústrias e expansão da equipe técnica.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="ml-8 md:ml-0 md:flex md:justify-between md:items-center">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-gray-900">2012</h3>
                  <p className="text-gray-600">Entrada no Mercado de Energia Solar</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-600">
                    Lançamento da divisão de energia solar e primeiros projetos fotovoltaicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="ml-8 md:ml-0 md:flex md:justify-between md:items-center">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-gray-900">2020</h3>
                  <p className="text-gray-600">Certificação ISO 9001</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-600">
                    Reconhecimento da qualidade dos nossos processos e serviços.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="ml-8 md:ml-0 md:flex md:justify-between md:items-center">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-gray-900">2023</h3>
                  <p className="text-gray-600">Expansão Nacional</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-600">
                    Abertura de novas unidades e consolidação como líder em soluções energéticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
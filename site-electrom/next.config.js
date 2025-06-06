/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignorar erros de ESLint durante o build
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      'localhost',
      'electrom.eng.br',
      'www.electrom.eng.br',
      'wp.electrom.eng.br'
    ]
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'SCICO workspaces',
    description: 'Additional KASMworkspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://www.scico.io/',
    contactUrl: 'https://www.scico.io',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasmregistry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

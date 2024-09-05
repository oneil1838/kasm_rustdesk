/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://github.com/oneil1838/kasm_rustdesk/img/logo.svg',
    listUrl: 'https://github.com/oneil1838/kasm_rustdesk/',
    contactUrl: 'https://github.com/oneil1838/kasm_rustdesk/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_rustdesk/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    APP_API: process.env.APP_API
  },
  i18n: {
    locales: ['default', 'cs'],
    defaultLocale: 'default',
    localeDetection: false
  },
  trailingSlash: false
}

module.exports = nextConfig

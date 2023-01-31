/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    APP_API: process.env.APP_API,
    ECOMAIL: process.env.ECOMAIL
  },
  i18n: {
    locales: ['default', 'cs'],
    defaultLocale: 'default',
    localeDetection: false
  },
  trailingSlash: false
}

module.exports = nextConfig

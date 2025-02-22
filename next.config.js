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
  experimental: {
    scrollRestoration: true,
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    APP_API: process.env.APP_API,
    ECOMAIL: process.env.ECOMAIL,
    MEILISEARCH_PREFIX: process.env.MEILISEARCH_PREFIX,
    MEILISEARCH_TOKEN: process.env.MEILISEARCH_TOKEN,
    APP_DOMAIN: process.env.APP_DOMAIN,
    MEILISEARCH_DOMAIN: process.env.MEILISEARCH_DOMAIN,
  },
  async rewrites() {
    return [
      {
        source: '/sitemap/index.xml',
        destination: 'https://admin.tulsio.cz/sitemap/index.xml',
      },
    ]
  },
  i18n: {
    locales: ['default', 'cs', 'en', 'sk', 'de'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    domains: ['localhost', 'admin.tulsio.cz'],
  },
}

module.exports = nextConfig

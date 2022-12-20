/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    APP_API: process.env.APP_API
  },
  // i18n: {
  //   locales: ['cs', 'catchAll'],
  //   defaultLocale: 'catchAll',
  //   localeDetection: false
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/catchAll',
  //       destination: '/cs',
  //       locale: false,
  //       permanent: false,
  //     },
  //     {
  //       source: '/catchAll/:slug*',
  //       destination: '/cs/:slug*',
  //       locale: false,
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig

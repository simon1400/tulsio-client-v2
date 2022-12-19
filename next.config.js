/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TYPESENSE_HOST: process.env.TYPESENSE_HOST,
    TYPESENSE_PORT: process.env.TYPESENSE_PORT,
    TYPESENSE_PROTOCOL: process.env.TYPESENSE_PROTOCOL,
    TYPESENSE_ADMIN_API_KEY: process.env.TYPESENSE_ADMIN_API_KEY,
    TYPESENSE_SEARCH_ONLY_API_KEY: process.env.TYPESENSE_SEARCH_ONLY_API_KEY,
    
    REACT_APP_TYPESENSE_SEARCH_ONLY_API_KEY: process.env.REACT_APP_TYPESENSE_SEARCH_ONLY_API_KEY,
    REACT_APP_TYPESENSE_PROTOCOL: process.env.REACT_APP_TYPESENSE_PROTOCOL,
    REACT_APP_TYPESENSE_HOST: process.env.REACT_APP_TYPESENSE_HOST,
    REACT_APP_TYPESENSE_PORT: process.env.REACT_APP_TYPESENSE_PORT,
    APP_API: process.env.APP_API
  }
}

module.exports = nextConfig

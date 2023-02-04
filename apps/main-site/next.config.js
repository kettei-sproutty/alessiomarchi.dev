const withPWA = require('@ducanh2912/next-pwa').default({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@alessiomarchi/ui'],
  modularizeImports: {
    '@alessiomarchi/components': {
      transform: '@alessiomarchi/ui/components/{{member}}',
    },
  },
}

module.exports = withPWA(nextConfig)

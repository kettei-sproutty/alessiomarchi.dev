/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    transpilePackages: ["@alessiomarchi/ui"]
}

module.exports = nextConfig
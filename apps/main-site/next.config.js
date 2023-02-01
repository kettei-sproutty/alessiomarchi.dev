const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@alessiomarchi/ui"],
  modularizeImports: {
    "@alessiomarchi/components": {
      transform: "@alessiomarchi/ui/components/{{member}}",
    },
  },
};

module.exports = withPWA(nextConfig);

/**
 * @type {import('tailwindcss/types/config').Config}
 */
module.exports = {
  presets: [require('@alessiomarchi/ui/tailwind.config')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@alessiomarchi/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
}

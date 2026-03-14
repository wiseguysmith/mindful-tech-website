/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rebrand palette
        'near-black': '#0B0F14',
        'soft-white': '#F5F7FA',
        slate: {
          50: '#F5F7FA',
          100: '#E8ECF1',
          200: '#D1D9E3',
          300: '#9BA8BC',
          400: '#5B6776',
          500: '#4A5568',
          600: '#3D4756',
          700: '#2D3544',
          800: '#1A1F28',
        },
        'electric-teal': '#14D3C3',
        'deep-blue': '#245BFF',
        // Legacy aliases for gradual migration
        cream: {
          50: '#F5F7FA',
          100: '#F5F7FA',
          200: '#E8ECF1',
          300: '#D1D9E3',
          400: '#9BA8BC',
          500: '#5B6776',
        },
        gold: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#14D3C3',
          500: '#14D3C3',
        },
        charcoal: {
          50: '#F5F7FA',
          100: '#E8ECF1',
          200: '#D1D9E3',
          300: '#9BA8BC',
          400: '#5B6776',
          500: '#4A5568',
          600: '#2D3544',
          700: '#1A1F28',
          800: '#0B0F14',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


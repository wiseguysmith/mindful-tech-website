/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Bible palette
        'deep-black': '#0A0A0F',
        'space-dark': '#111118',
        'midnight': '#1A1A24',
        'slate-border': '#2A2A3A',
        'muted-text': '#8888A0',
        'off-white': '#E8E8F0',
        'emerald': '#1DB97E',
        // Legacy aliases — mapped to brand bible equivalents
        'near-black': '#0A0A0F',
        'soft-white': '#E8E8F0',
        'electric-teal': '#1DB97E',
        'deep-blue': '#1DB97E',
        slate: {
          50: '#E8E8F0',
          100: '#D0D0E0',
          200: '#2A2A3A',
          300: '#8888A0',
          400: '#8888A0',
          500: '#8888A0',
          600: '#1A1A24',
          700: '#111118',
          800: '#0A0A0F',
        },
        cream: {
          50: '#E8E8F0',
          100: '#E8E8F0',
          200: '#D0D0E0',
          300: '#8888A0',
          400: '#8888A0',
          500: '#8888A0',
        },
        gold: {
          50: '#d4f7e8',
          100: '#a8efcf',
          200: '#7be7b8',
          300: '#4ddf9f',
          400: '#1DB97E',
          500: '#1DB97E',
        },
        charcoal: {
          50: '#E8E8F0',
          100: '#D0D0E0',
          200: '#2A2A3A',
          300: '#8888A0',
          400: '#8888A0',
          500: '#8888A0',
          600: '#1A1A24',
          700: '#111118',
          800: '#0A0A0F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}


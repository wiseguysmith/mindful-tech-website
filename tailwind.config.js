/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mindful Tech — Light Theme
        cream: {
          50:  '#FDFBF8',
          100: '#FAF7F2',
          200: '#F2EDE4',
          300: '#E8E0D4',
          400: '#DDD6CC',
          500: '#C8BFB2',
        },
        forest: {
          50:  '#EEF2ED',
          100: '#D4E0D2',
          200: '#9DB89A',
          300: '#5C8558',
          400: '#2D5229',
          500: '#1A2B1A',
          600: '#111D11',
        },
        terracotta: {
          50:  '#FBF0EC',
          100: '#F5D9CF',
          200: '#E8A990',
          300: '#D97A5A',
          400: '#C4522A',
          500: '#A03D1A',
          600: '#7A2D10',
        },
        gold: {
          50:  '#FDF8EC',
          100: '#F7EDCA',
          200: '#EDD68A',
          300: '#DEAD4A',
          400: '#B8860B',
          500: '#8A6408',
        },
        // Legacy compat
        'near-black':     '#1A2B1A',
        'soft-white':     '#FAF7F2',
        'electric-teal':  '#2D5229',
        'deep-black':     '#111D11',
        'space-dark':     '#1A2B1A',
        'midnight':       '#2D3B2D',
        'slate-border':   '#DDD6CC',
        'muted-text':     '#7A7468',
        'off-white':      '#FAF7F2',
        'emerald':        '#2D5229',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'draw':        'draw 1.8s ease-out forwards',
        'pulse-node':  'pulseNode 2.4s ease-in-out infinite',
        'arrive':      'arrive 0.7s ease-out forwards',
        'fade-up':     'fadeUp 0.6s ease-out forwards',
        'grow-tree':   'growTree 2s ease-out forwards',
      },
      keyframes: {
        draw: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.4)' },
        },
        arrive: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        growTree: {
          '0%':   { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'nordeste': {
          'terracota': '#934123',
          'verde': '#5A8433',
          'creme': '#F5F1E6',
          'areia': '#E5DCC5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        slowzoom: {
          '0%':   { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1.00)' },
        },
        fadeslide: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadein: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollbar: {
          '0%':   { transform: 'scaleY(1)',   opacity: '1' },
          '50%':  { transform: 'scaleY(0.4)', opacity: '0.5' },
          '100%': { transform: 'scaleY(1)',   opacity: '1' },
        },
      },
      animation: {
        slowzoom:  'slowzoom 18s ease-out forwards',
        fadeslide: 'fadeslide 0.9s ease forwards',
        fadein:    'fadein 1s ease forwards',
        scrollbar: 'scrollbar 2s ease-in-out 2s infinite',
      },
    },
  },
}
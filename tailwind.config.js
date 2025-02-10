/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#D39D55',
        'warm-white': '#FDFBF9',
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
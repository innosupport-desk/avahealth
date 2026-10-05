/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Sampled from the AVA Health logo
        navy: {
          50: '#eef1f8',
          100: '#d9dfef',
          200: '#b0bcdc',
          500: '#2a3d7c',
          600: '#22336b',
          700: '#1b2a5e',
          800: '#152149',
          900: '#0f1835',
          950: '#0a1024',
        },
        brand: {
          50: '#ecf6f5',
          100: '#d2ebe9',
          200: '#a6d6d2',
          400: '#3f9a95',
          500: '#16807b',
          600: '#0f6b68',
          700: '#0d5956',
          800: '#0b4644',
          900: '#083432',
        },
        gold: {
          100: '#f8edd0',
          200: '#f2d98f',
          300: '#e8c66c',
          400: '#d4ad55',
          500: '#c09440',
          600: '#a57a2f',
        },
        cream: '#faf8f3',
      },
    },
  },
  plugins: [],
};

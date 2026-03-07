/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        surface: '#161b22',
        surface2: '#1c2333',
        blue: '#58a6ff',
        gold: '#f0a500',
        green: '#3fb950',
        muted: '#8b949e',
      },
    },
  },
  plugins: [],
};

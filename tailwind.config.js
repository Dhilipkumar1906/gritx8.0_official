/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gritxBg: '#0b0c10',
        gritxPanel: '#0f1720',
        gritxAccent: '#00e6ff',
        gritxOrange: '#ff6b4a'
      },
      keyframes: {
        pop: { '0%': { transform: 'scale(.92) translateY(8px)', opacity: '0' }, '100%': { transform: 'scale(1) translateY(0)', opacity: '1' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }
      },
      animation: {
        pop: 'pop .9s cubic-bezier(.22,.9,.3,1) both',
        floaty: 'floaty 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

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
        pop: {
          '0%': { transform: 'scale(.92) translateY(8px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        // 🔥 fall animation
        fall: {
          '0%': { transform: 'translateY(-150%)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(120vh)', opacity: '0' }
        },
        // 🌈 glow color shift
        glow: {
          '0%, 100%': { backgroundColor: 'rgba(0, 0, 139, 0.35)' },   // darkblue
          '50%': { backgroundColor: 'rgba(0, 255, 255, 0.35)' }      // cyan
        },
        // ✨ fade-in-up animation (for Events reveal)
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      },
      animation: {
        pop: 'pop .9s cubic-bezier(.22,.9,.3,1) both',
        floaty: 'floaty 4s ease-in-out infinite',
        fall: 'fall linear infinite',
        glow: 'glow 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards' // ✨ added here
      }
    },
  },
  plugins: [],
}

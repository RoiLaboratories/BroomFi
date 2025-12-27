import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
      },
      colors: {
        primary: {
          green: '#BBF7D0',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          'gray-light': '#2a2a2a',
        },
      },
      backgroundImage: {
        'gradient-dark': 'conic-gradient(from 180deg at 50% 50%, #000000 0deg, #000000 90deg, #BBF7D0 180deg, #000000 270deg, #000000 360deg)',
      },
    },
  },
  plugins: [],
}
export default config


// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'alegreya': ['Alegreya Sans SC', 'sans-serif'],
        'balsamiq': ['Balsamiq Sans', 'cursive'],
        'mono': ['Noto Sans Mono', 'monospace']
      },
      animation: {
        'slide-in': 'slideIn 1.2s ease forwards'
      },
      keyframes: {
        slideIn: {
          'from': { 
            opacity: '0', 
            transform: 'translateY(-40px)',
            scale: '2'
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)',
            scale: '1'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config


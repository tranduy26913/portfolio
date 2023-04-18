import plugin from 'tailwindcss';

const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    colors: {
      'blue': colors.blue,
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#42B883',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'gradient': 'linear-gradient(-45deg,#646cff,#42B882)',
      'transparent': '#ffffff00',
      'gray': colors.gray,
      'dark': '#272727',
      'primary':'var(--bg-primary-color)',
    },

    extend: {
      height: {
        '0.75': '3px',
      },
      textColor: {
        
          dark:'#ddd'
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
        4: '4 1 0%',
        5: '5 1 0%'
      },
      boxShadow: {
        //'neumor': '5px 5px 14px var(--neumor-color-1),-5px -5px 14px var(--neumor-color-2)'
        'neumor': '5px 5px 14px #8c8e8f,-5px -5px 14px #fff',
        'neumor-dark': '5px 5px 14px #1f1f1f,-5px -5px 14px #292929'
      },
      animation: {
        effectText: 'effectText 2s linear infinite',
        typewriter: 'typing 3.5s steps(15, end) infinite, blinkCaret .75s step-end infinite',
        spinSkew: 'spinSkew 3.5s linear infinite'
      },
      keyframes: {
        effectText: {
          '0%': { maxWidth: '0%' },
          '50%': { maxWidth: '400px' },
          '100%': { maxWidth: '0%' },
        },
        spinSkew: {
          '0%': {
            transform: 'translateY(20px) rotateX(-60deg) rotateZ(0)'
          },
          '100%': {
            transform: 'translateY(20px) rotateX(-60deg) rotateZ(-360deg)'
          }
        },
        typing: {
          'from': { maxWidth: 0 },
          'to': { maxWidth: '100%' },
        },
        blinkCaret: {
          'from': { borderColor: 'transparent' },
          'to': { borderColor: 'transparent' },
          '50%': { borderColor: colors.blue[600] }
        }
      }
    },
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000613',
          fixed: '#d4e3ff',
          'fixed-dim': '#afc8f0',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          fixed: '#001c3a',
        },
        secondary: {
          DEFAULT: '#50606f',
          container: '#d1e1f4',
        },
        'on-secondary': {
          container: '#556474',
        },
        tertiary: {
          DEFAULT: '#0c0300',
          fixed: '#ffdcc3',
          container: '#331700',
        },
        'on-tertiary': {
          fixed: '#2f1500',
          container: '#cb6e00',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          dim: '#d9dadb',
          bright: '#f8f9fa',
          'container-lowest': '#ffffff',
          'container-low': '#f3f4f5',
          container: '#edeeef',
          'container-high': '#e7e8e9',
          'container-highest': '#e1e3e4',
        },
        'on-surface': {
          DEFAULT: '#191c1d',
          variant: '#43474e',
        },
        outline: {
          DEFAULT: '#74777f',
          variant: '#c4c6cf',
        },
        background: '#f8f9fa',
        'on-background': '#191c1d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Libre Caslon Text', 'serif'],
        mono: ['IBM Plex Sans', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

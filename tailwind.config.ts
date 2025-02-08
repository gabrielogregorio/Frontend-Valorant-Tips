import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},

    fontFamily: {
      poppins: ['"Poppins"', 'sans-serif'],
    },

    boxShadow: {
      md: '0px 2px 6px 0px rgba(0, 0, 0, 0.1)',
    },

    borderRadius: {
      xxs: '2px',
      xs: '4px',
      sm: '6px',
      full: '100%',
    },

    spacing: {
      '0': '0px',
      xxs: '2px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '12px',
      xl: '16px',

      '2xl': '20px',
      '3xl': '24px',

      '4xl': '28px',
      '5xl': '32px',

      '6xl': '36px',
      '7xl': '48px',

      'content-desktop': '890px', // added figma
      'size-w-content-modal': '650px',
      full: '100%',
    },

    screens: {
      desktop: '1366px',
      tabled: '1024px',
      mobile: '640px',
    },
    width: {
      'content-desktop': '890px',
      'size-w-content-modal': '650px',
      full: '100%',
    },
    borderWidth: {
      DEFAULT: '1px',
    },

    backgroundImage: {
      loadImage: ' url(/images/choiceImage.png);',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#D85F5F',
        hard: '#E03F3F',
        soft: '#E07A7A',
      },

      secondary: {
        DEFAULT: '#3386D3',
        hard: '#0764BA',
        soft: '#72A8DB',
      },

      root: {
        bg: '#F7F7FA',
      },
      content: {
        fg: {
          DEFAULT: '#444444',
          subcontent: '#6A7281',
          contrast: '#FFFFFF',
          placeholder: '#99A1AE',
          disabled: '#848589',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          disabled: '#F0F3FA',
          highlight: '#D9D9D9',
        },
      },
      accent: {
        radiant: '#FE9E2E',
        rose: '#D81E65',
        purple: '#9747FF',
        pacific: {
          blue: '#029ABC',
        },
      },
      feedback: {
        error: {
          hard: '#CB4343',
          soft: '#FCD2D2',
        },
        success: {
          hard: '#125134',
          soft: '#D1E7DD',
        },
      },
      overlay: {
        bg: 'rgba(0,0,0, 0.6)',
        'bg-blur': 'rgba(26,26,26,0.5)',
      },
      border: {
        DEFAULT: '#BABABA',
        soft: '#E8E8E8',
      },
      neutral: {
        900: '#111111',
        800: '#1A1A1A',
        750: '#383838',
        650: '#2C2C2C',
        500: '#6C6C6C',
        100: '#EFEFEF',
      },
    },
    animation: {
      pulseIn300: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      spin: 'spin 1s linear infinite',
      fadeIn300: 'fadeIn300 .3s  ease-in-out forwards',
    },
    keyframes: {
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.3' },
      },

      fadeIn300: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },

      spin: {
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
  plugins: [],
} satisfies Config;

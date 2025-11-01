import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a'
        },
        primary: {
          50: '#f1f9ff',
          100: '#e0f2ff',
          200: '#b9e0ff',
          300: '#8bcbff',
          400: '#58afff',
          500: '#2b8fff',
          600: '#176ff2',
          700: '#1358c7',
          800: '#164aa1',
          900: '#1a3f7f'
        },
        success: '#22c55e',
        warning: '#f97316',
        danger: '#ef4444'
      }
    }
  },
  plugins: []
};

export default config;

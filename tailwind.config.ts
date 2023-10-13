import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: {
          main: '#1E1E1E',
          light: '#333140',
        },
        secondary: {
          main: '#D9D9D9',
          dark: '#9BA0A4',
        },
      },
    },
  },
  plugins: [],
};
export default config;

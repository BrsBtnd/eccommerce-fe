import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1920px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'titan-silver': 'rgb(var(--titan-silver))',
        'light-silver': 'rgb(var(--light-silver))',
        'dark-green': 'rgb(var(--dark-green))',
        'light-green': 'rgb(var(--light-green))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

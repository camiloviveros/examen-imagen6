import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'qatar-purple': '#560D40',
        'qatar-white': '#FFFFFF',
        'qatar-red': '#C05A67',
      },
    },
  },
  plugins: [],
}

export default config
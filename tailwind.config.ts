import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'mainGreen': '#107D44',
      'lightGreen': '#6fbf73',
      'darkGreen': '#243219',
      'silver': '#C4C5C0',
      'darkgrey': '#595a55',
      'darkbrown': '#110809',
      'white': '#FFFFFF',
      'goldenroad': '#BC873E',
      'light-goldenroad': '#C6AE80',
      'dark-goldenroad': '#B87333',
      'red': '#d32f2f'
    }
  },
  plugins: [],
}

export default config

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'goldenrod': '#BC873E',
      'lightbrown': '#C6AE80',
      'silver': '#C4C5C0',
      'darkgrey': '#595a55',
      'darkbrown': '#110809'
    }
  },
  plugins: [],
})

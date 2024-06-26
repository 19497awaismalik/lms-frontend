/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["var(--font-Poppins)"],
        Josefin:["var(--font-Jossfin)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        '1500px':'1500px',
        '1300px':'1300px',
        '1200px':'1200px',
        '1100px':'1100px',
        '1000px':'1000px',
        '800px':'800px' ,
        '400px':'400px'
      }
    },
  },
  plugins: [],
}

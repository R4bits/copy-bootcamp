/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': 'url("/bg-mobile-light.jpg")',
        'desktop': 'url("/bg-desktop-light.jpg")'
      },
      colors: {
        lila: 'hsl(280, 87%, 65%)'
      }
    },
  },
  plugins: [],
}

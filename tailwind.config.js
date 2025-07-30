/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['OptimaProDemiBold', 'sans-serif'],
        subline: ['"Merriweather Sans"', 'sans-serif'],
        copy: ['"Merriweather Sans"', 'sans-serif'],

      },
      colors: {
        'light-grey': '#F8F4F0',
        'dark-grey': '#E3DEDA',
        'black': '#282828',  
        

      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bar1 : 'bar1 1s linear forwards', 
        bar2 : 'bar2 1s linear forwards', 
        bar3 : 'bar3 1s linear forwards', 
        bar4 : 'bar4 1s linear forwards', 
        bar5 : 'bar5 1s linear forwards', 
      },
      keyframes: {
        bar1 : {
          '0%' : { width:'0%' },
          '100%' : { width:'80%' }
        },
        bar2 : {
          '0%' : { width:'0%' },
          '100%' : { width:'85%' }
        },
        bar3 : {
          '0%' : { width:'0%' },
          '100%' : { width:'60%' }
        },
        bar4 : {
          '0%' : { width:'0%' },
          '100%' : { width:'50%' }
        },
        bar5 : {
          '0%' : { width:'0%' },
          '100%' : { width:'20%' }
        }
      }
    },
  },
  plugins: [],
}

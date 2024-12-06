/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
       extend: { 
        colors: {
          purple:{
            darker:'#181824',
            normal:'#25273c',
            lighter:'#751c78'
          }, 
          blue:{
            lighter:"#467aeb",
            darker:'#112223'
          } ,
          gray:{
            darker: '#8d8fa6',
            lighter:"#b1b3cb"
          }
      }}
  },
  plugins: [],
}


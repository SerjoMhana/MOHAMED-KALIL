module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      
      },
      
    colors: {
    'maincolor': '#046c4e',
    'secondarycolor': '#046c4e',
    'secondarycolor/2': '#046c4e',
    'Headingcolor': '#046c4e',
    'LDN': '#ffda25',
    'Orange' : '#f18b0b',
    'Green' : '#0aa074',
    'background' : '#f5f5f58c'
    
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/img-background-hero.jpeg')",


      }}
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};
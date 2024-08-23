/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  
    //  darkMode: 'class',
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)', 
    ]],

  theme: {
    colors: {
      customPrimary: '#06141B',
      customSecondary: '#CCD0CF',
  },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ]
    },
    extend: {
      
      translate:{
        '50': '50%',
      },
      scrollbar: {
        hide: '::-webkit-scrollbar { display: none; }',
      },
      borderRadius:{
        '10p':'10%',
        '20p':'20%',
        '30p':'30%',
        '40p':'40%',
        '50p':'50%',
      }
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Hide scrollbar for webkit browsers (Chrome, Safari) */
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },
],
}

    
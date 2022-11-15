module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" , './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'tiffany': '#0ABAB5',
        'tiffany60': 'rgba(10, 186, 181, 0.6)',
        'tiffany30': 'rgba(10, 186, 181, 0.3)'
      },
      fontFamily: {
        title: ['Upheaval'],
        text: ['Squada One', 'cursive'],
      },
      fontSize: {
        'huge': ['15rem', '12.5rem'],
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '1/4Screen': '22vh',
        '1/2Screen': '50vh',
        '2/3Screen': '66.66vh',
        '1/3Screen': '33.33vh',
        '150px':'150px'
      },
      backgroundImage: {
        'header': "url('../src/assets/BG6.png')",
      },
      zIndex: {
        '1': '1',
      },
      backgroundSize: {
        '45': '55%',
        '75': '85%',
        '65': '65%',
      },
      boxShadow: {
        'bgShadow': 'inset 0 0 25px 50px rgba(0, 0, 0, 1)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '10': 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        '20': 'repeat(20, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('autoprefixer'),
  ],
}

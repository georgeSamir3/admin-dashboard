// const config = {
//   content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
//   corePlugins: {
//     preflight: false
//   },
//   important: '#__next',
//   plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin')],
//   theme: {
//     extend: {}
//   }
// }

// export default config

import tailwindLogical from 'tailwindcss-logical'
import corePlugin from './src/@core/tailwind/plugin'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  plugins: [tailwindLogical, corePlugin],
  theme: {
    extend: {}
  }
}

export default config

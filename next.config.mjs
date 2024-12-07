// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: process.env.BASEPATH,
//   redirects: async () => {
//     return [
//       {
//         source: '/',
//         destination: '/en/dashboard',
//         permanent: true
//       }
//     ]
//   },
//   webpack: (config, { isServer }) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'react-is': require.resolve('react-is')
//     };

//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//       net: false,
//       tls: false
//     };

//     // Handle MUI and ES Module issues
//     config.module.rules.push({
//       test: /\.js$/,
//       use: ['source-map-loader'],
//       enforce: 'pre',
//       exclude: [/node_modules\/@mui/, /node_modules\/react-is/]
//     });

//     return config;
//   },
//   // Enable strict mode for better error catching
//   reactStrictMode: true,

//   // Transpile MUI packages
//   transpilePackages: [
//     '@mui/material',
//     '@mui/system',
//     '@mui/base',
//     '@mui/lab',
//     '@mui/icons-material'
//   ]
// }

// export default nextConfig

import { createRequire } from 'module'

// Create a `require` function for ESM
const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboard',
        permanent: true
      }
    ]
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-is': require.resolve('react-is') // Use `require` from `createRequire`
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }

    // Handle MUI and ES Module issues
    config.module.rules.push({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: [/node_modules\/@mui/, /node_modules\/react-is/]
    })

    return config
  },
  // Enable strict mode for better error catching
  reactStrictMode: true,

  // Transpile MUI packages
  transpilePackages: ['@mui/material', '@mui/system', '@mui/base', '@mui/lab', '@mui/icons-material']
}

export default nextConfig

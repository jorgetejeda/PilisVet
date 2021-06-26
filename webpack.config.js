const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'PilisVet - Tu app social de mascotas',
      short_name: 'PilisVet',
      description: 'Con PilisVet puedes encontrar y subir fotos de animales domésticos.',
      orientation: 'portrait',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          // Desde donde estamos cargando las imagenes
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst', // Mirara primero si el recurso esta en la red
          options: {
            cacheName: 'images' // va a buscar en la cache con este nombre las imagenes
          }
        },
        {
          urlPattern: new RegExp('https://petgram-api-ashy.vercel.app'),
          handler: 'NetworkFirst', // Buscara los datos en la red para mantenerlos frescos
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}

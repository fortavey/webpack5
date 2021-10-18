const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const conf = {
  entry: {
    vue: './src/js/vue.js',
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '',
    clean: true,
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: false,
      inject: 'body',
    }),
  ],
}

module.exports = (env, options) => {
  let isProd = options.mode === 'production'

  conf.devtool = isProd ? false : 'eval-cheap-module-source-map'

  return conf
}

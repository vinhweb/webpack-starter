const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const generateHtmlPlugin = (title) => {
  return new HtmlWebpackPlugin({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./src/views/${title.toLowerCase()}.html`,
  });
}

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
}

const pages = populateHtmlPlugins(["index", "about"]);

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: pages
}
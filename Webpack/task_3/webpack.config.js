const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8564, // Specify the port for the development server
    open: true, // Automatically open the browser
  },
  devtool: 'inline-source-map', // For inline source mapping
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['header', 'body', 'footer'],
    }),
    new CleanWebpackPlugin(),
  ],
};

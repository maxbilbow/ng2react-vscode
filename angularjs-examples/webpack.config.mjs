import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/angular/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      // {
      //     test: /\.{js,ts,jsx,tsx}$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'ts-loader',
      //     }
      // },
      {
        test: /\.html$/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    static: [
      {
        directory: path.resolve(__dirname, 'src/angular'),
        publicPath: '/templates',
        serveIndex: true,
      },
    ],
    client: {
      overlay: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/angular/app.html',
    }),
  ],
};

import 'webpack';

module.exports = {
  entry: './client/index.js',
  output: { path: __dirname, filename: '/client/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};

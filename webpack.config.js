require('webpack');

module.exports = {
  entry: {
    home: './client/home.js',
  },
  output: { path: 'client/dist', publicPath: 'client/dist', filename: '[name].bundle.js' },
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

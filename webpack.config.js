module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test:/.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015','stage-0','stage-1']
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

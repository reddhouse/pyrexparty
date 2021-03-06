// Webpack will take our "entry" code, run it through a transformation, where
// JSX is changed to Javascript, and spit it out in the correct place/file

// At the end of this configuration file we're going to run a plugin that uses these
// vars to take our index.html file and inject it into the same directory as our
// bundle and make sure it can references the correct js file through the script tag
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    // Output our transformed bundle file to the current directory where
    // this script is currently executing + a dist folder
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // Use some loaders to make transformation to our code
    loaders: [
      {
      // Specify that we will do this on any .js files, minus exclusions
      // Babel configuration needs to be setup in the .babelrc file
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      },
      // The following loader is used for CSS Modules
      {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',

    // Delete entire line to change back to default port 8080
    port: process.env.PORT || 3000
  },
  plugins: [HTMLWebpackPluginConfig]
};

const webpack = require('webpack');
const version = require("./package.json").version;
const banner =
  "/**\n" +
  " * vue-markdown v" + version + "\n" +
  " * https://github.com/adapttive/vue-markdown\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: './src/build.js',
  output: {
    path: __dirname + "/dist",
    filename: 'vue-markdown.js',
    library: 'VueMarkdown',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner, {raw: true})
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue'
    }, {
      test: /\.css$/,
      use: "style!css"
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
}

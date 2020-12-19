const webpack = require("webpack");
const version = require("./package.json").version;
const banner =
  "/**\n" +
  " * vue-markdown v" + version + "\n" +
  " * https://github.com/adapttive/vue-markdown\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: "./src/VueMarkdown.js",
  target: "node",
  output: {
    path: __dirname + "/dist",
    filename: "vue-markdown.common.js",
    library: "VueMarkdown",
    libraryTarget: "umd"
  },
  externals: /^[^.]/,
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      use: "vue"
    }, {
        test: /\.js$/,
      use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: "style!css"
      }]
  },
}

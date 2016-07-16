var path              = require("path");

var ROOT_PATH         = path.resolve(__dirname);
var APP_PATH          = path.resolve(ROOT_PATH, "js");


module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  entry: APP_PATH,
  output: {
    path: "./sqs_template/scripts/",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.svg$/, exclude: /node_modules/, loader: "raw-loader" }
    ]
  }
}

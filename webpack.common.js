var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "js"),
  output: {
    path: path.resolve(__dirname, "template/scripts"),
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
};

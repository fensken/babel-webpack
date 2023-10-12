const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
  {
    entry: "./src/main.ts",
    output: {
      path: path.join(__dirname, "build"),
      filename: "main.js",
    },
    target: ["web","es5"],
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    node: {
      __dirname: false,
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  }
];
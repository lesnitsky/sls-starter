const path = require("path");

module.exports = {
  entry: "./handler.ts",
  target: "node",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "handler.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
};

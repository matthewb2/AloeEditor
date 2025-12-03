const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/renderer/index.jsx"),
  output: {
  path: path.resolve(__dirname, "dist"),
  filename: "[name].bundle.js",
  chunkFilename: "[name].chunk.js",
  publicPath: "",
  clean: true
},
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,  "src/index.html"),
    }),
    new MonacoWebpackPlugin({
      // 필요 언어만 명시하면 빌드 결과가 작아집니다.
      languages: ["javascript", "typescript", "json"],
      // features: ['!gotoSymbol'] // 필요시 기능 조정
    }),
  ],
  target: "web",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

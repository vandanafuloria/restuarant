const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "index.js",
  // start: "index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // Ensure you have an HTML template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from dist
    port: 9000, // Port for the dev server
  },
};

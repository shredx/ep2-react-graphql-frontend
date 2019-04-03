const path = require("path");

module.exports = {
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  devServer: {
      inline: true,
      host: 'localhost',
      port: 4201
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react','stage-0']
         },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

const path = require("path");
const basePath = path.dirname(__dirname);

module.exports =  {
  entry: path.resolve(basePath, "src/index.ts"),
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve:{
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization:{
    minimize: false,
  },
  plugins:[],
  output: {
    filename: "index.js",
    path: path.resolve(basePath, "dist"),
    libraryTarget: 'umd'
  },
};
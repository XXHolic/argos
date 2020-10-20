const path = require("path");
const basePath = path.dirname(__dirname);

module.exports =  {
  entry: path.resolve(basePath, "src/index.ts"),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(ts|tsx|js)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         "@babel/preset-typescript",
      //       ],
      //       plugins: [
      //         "@babel/plugin-transform-classes",
      //         ["@babel/plugin-proposal-class-properties", { loose: true }]
      //       ]
      //     }
      //   }
      // }
    ]
  },
  resolve:{
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization:{
    minimize: false,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins:[],
  output: {
    filename: "index.js",
    path: path.resolve(basePath, "es")
  },
};
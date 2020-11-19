const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const basePath = path.dirname(__dirname) + '/browser/';
const filterArgv = require('../../script/filterArgv.js')
const outPath = filterArgv('--outPath') || 'dist';
const filename = filterArgv('--filename') || 'index';

const isMini = !(outPath === 'example');
const devtoolValue = isMini?'source-map':'none';

let proConfig = {
  entry: path.resolve(basePath, "src/index.ts"),
  mode: 'production',
  devtool: devtoolValue,
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: isMini,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve:{
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: `${filename}.js`,
    path: path.resolve(basePath, outPath),
    libraryTarget: 'umd',
    library: 'Argos',
  }
}

if (!isMini) {
  proConfig.plugins=[]
}

module.exports = proConfig;
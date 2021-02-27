const path = require('path');
const webpack = require('webpack');
const context = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
              }
            }
          },
        ],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ["@babel/plugin-transform-typescript", { isTSX: true }],
                '@babel/transform-react-jsx',
                [
                  'react-css-modules',
                  {
                    filetypes: {
                      ".scss": {
                        "syntax": "postcss-scss"
                      }
                    }
                  }
                ],
              ]
            }
          },
          'ts-loader',
        ]
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
  }
};
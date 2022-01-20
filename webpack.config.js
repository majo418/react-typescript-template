const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

"use strict"

module.exports = (env, args) => {
  return ({
    entry: ["babel-polyfill", path.resolve("src", "index.tsx")],
    module: {
      rules: [
        //JAVASCRIPT
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        //HTML
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        //CSS
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        //FONTS
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        },
        //SHADERS
        {
          test: /\.glsl$/i,
          use: [
            {
              loader: "raw-loader",
              options: {
                esModule: false,
              },
            },
          ],
        },
        /*
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: "report.html",
          generateStatsFile: true,
          statsFilename: "stats.json",
          statsOptions: null,
          logLevel: "info",
          defaultSizes: "parsed",
          module: false,
          modules: false,
          excludeAssets: null,
          assets: false,
          children: false,
          maxModules: 0,
          moduleTrace: false,
          performance: false,
          providedExports: false,
          publicPath: false,
          entrypoints: false,
          usedExports: false,
          source: false,
          errorOverlay: false,
          exclude: [],
          excludeModules: [],
          presets: [],
          plugins: [],
          transform: null,
          postcss: null
        }),
        */
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve("src", "index.html")
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "static",
            to: "static"
          }
        ]
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: env.PORT || 30000,
      hot: true
    }
  })
}
const rspack = require("@rspack/core");
const packageJson = require("./package.json");

module.exports = {
  entry: {
    app: "./app/index.tsx",
  },
  output: {
    clean: true,
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: "app/public/index.html",
          to: "/dist/index.html",
        },
      ],
    }),
    new rspack.HtmlRspackPlugin({
      template: "app/public/index.html",
      templateParameters: {
        version: packageJson.version,
      },
    }),
  ],
};

const rspack = require("@rspack/core");
const path = require("path");

// TODO - remove in final production version. Replace with alternative option, like github SHA or build number
const packageJson = require("./package.json"); // Its for testing purposes only

module.exports = {
  context: __dirname,
  entry: {
    admin: path.resolve(__dirname, "./src/admin/index.tsx"),
  },
  output: {
    clean: true,
    filename: "[name].js",
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
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: [path.resolve(__dirname, "./src/admin/public/assets/")],
  },
  resolve: {
    alias: {
      "@keboola/shared": path.resolve(__dirname, "./src/shared/"),
      "@keboola/components": path.resolve(__dirname, "./src/components/"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, "./src/admin/public/admin.html"),
      templateParameters: {
        version: packageJson.version,
      },
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/admin/public/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ],
    }),
  ],
};

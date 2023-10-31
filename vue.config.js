const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
  publicPath: "/symptom/",
  transpileDependencies: true
})

const CopyPlugin = require('copy-webpack-plugin');
let assetsDir = "assets";

module.exports = {
  publicPath: '/social-contribution/',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       // target: 'http://localhost:8080/social-contribution/',
  //       target: 'https://hanna7582.github.io/social-contribution/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  },
  assetsDir: assetsDir,
  configureWebpack: {
    output: {
      filename: "[name].js",
      chunkFilename: "chunk/[name].js"
    },
    plugins: [
      new CopyPlugin([{ from: 'src/assets', to: 'assets' }])
    ],
  },

  chainWebpack: config => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [{
          filename: assetsDir + "/[name].css",
          chunkFilename: assetsDir + "/[name].css"
        }]);
    }
  }
}
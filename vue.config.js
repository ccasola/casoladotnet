module.exports = {
  publicPath: "./",
  indexPath: "index.html",
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.magicthegathering.io/v1/",
        changeOrigin: true
      }
    }
  }
};

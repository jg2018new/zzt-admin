module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
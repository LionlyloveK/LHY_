// vue.config.js
module.exports = {
    // 选项...
    // publicPath: process.env.NODE_ENV === 'production'
    // ? 'http://localhost:8080'
    // : '/',
    publicPath: './',
    assetsDir:'static',
    devServer: {
        host: 'localhost',
        port: '3000',
        proxy: {
            '/api': {
                target: 'https://m.douyu.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}
const path = require('path')
const resolve = dir => path.join(__dirname, dir)


module.exports = {
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
          warnings: true,
          errors: true
        },
        host: "localhost",
        port: 6065, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
    },
    chainWebpack: config => {
      config.resolve.alias
        .set('assets', resolve('src/assets'))
    }
}
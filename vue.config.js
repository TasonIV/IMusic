const path = require('path')


module.exports = {
    devServer: {
        // proxy: {  // 代理
        //     "/api": {
        //         target: "http://localhost:3000",  // 源地址
        //         changeOrigin: true, // 改变源
        //         secure: false // 允许https
        //     }
        // },
    },
    // scss 自动化导入的配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/common/scss/*.scss'),
            ]
        }
    }
}
module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '陈山树-2022/1/25'
            return args
        })
    }
}
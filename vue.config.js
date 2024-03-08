const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['__VUE_OPTIONS_API__'] = true
        args[0]['__VUE_PROD_DEVTOOLS__'] = false
        args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false
        return args
      })

    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()

    config.module
      .rule('.csv')
      .test(/\.csv$/)
      .include
      .add(path.resolve(__dirname, 'src/assets/'))
      .add(path.resolve(__dirname, 'src/assets/others/'))
      .end()
      .use('csv-loader')
      .loader('csv-loader')
      .end()
  },
  outputDir: 'docs',
  // 設定 Vue CLI 專案的公共路徑（publicPath）
  publicPath: '/',
})
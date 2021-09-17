const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5 // 设计稿的基数(设计稿10等分之后的数)
})

module.exports = {
  runtimeCompiler: true, // 让Vue组件中可以使用template
  lintOnSave: false, // 关闭eslint语法检查
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
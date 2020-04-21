const {
  resolve
} = require('path')

module.exports = (options, context) => ({
  define() {
    const {
      copySelector,
      copyMessage,
      duration,
      showInMobile,
      copyTitle,
      copyName
    } = options

    return {
      COPY_SELECTOR: copySelector || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      COPY_MESSAGE: copyMessage || '复制成功',
      DURATION: duration || 3000,
      SHOW_IN_MOBILE: showInMobile || false,
      COPY_TITLE: copyTitle || "复制代码",
      COPY_NAME: copyName || "复制"
    }
  },

  clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js')
})

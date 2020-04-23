# vuepress-plugin-good-copycode

> A vuepress plugin for clipboard-copy


## Install

``` bash
# install dependencies
npm i vuepress-plugin-good-copycode -D

# or use yarn
yarn add vuepress-plugin-good-copycode -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['vuepress-plugin-good-copycode']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['vuepress-plugin-good-copycode', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    duration: 300, // prompt message display time.
    showInMobile: false, // whether to display on the mobile side, default: false.
    copyTitle: "复制代码",
    copyName: "复制"
  }]
}
```

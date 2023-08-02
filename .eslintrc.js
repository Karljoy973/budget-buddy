require('@rushstack/eslint-patch/modern-module-resolution');
const path = require('path');

const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb'
  ],
  rules: {
    'import/no-unresolved': 'error'
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './Client/src/*')}`,
      '@app': `${path.resolve(__dirname, './Server/app/*')}`,
    })
  }
}
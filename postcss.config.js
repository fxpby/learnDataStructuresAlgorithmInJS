/*
 * @Author: fxpby
 * @Date: 2020-09-01 20:59:11
 * @LastEditTime: 2020-09-01 21:02:10
 * @LastEditors: fxpby
 * @Description: 
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        "Android 4.1",
        "IOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    })
  ]
}
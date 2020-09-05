/*
 * @Author: fxpby
 * @Date: 2020-09-05 15:57:11
 * @LastEditTime: 2020-09-05 15:58:35
 * @LastEditors: fxpby
 * @Description: 
 */
export default class Node {
  constructor (key) {
    this.key = key
    this.left = undefined
    this.right = undefined
  }

  toString() {
    return `${this.key}`
  }
}
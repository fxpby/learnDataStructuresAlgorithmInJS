/*
 * @Author: fxpby
 * @Date: 2020-09-05 08:58:03
 * @LastEditTime: 2020-09-05 08:59:45
 * @LastEditors: fxpby
 * @Description: 
 */
export class ValuePair {
  constructor (key,value) {
    this.key = key
    this.value = value
  }
  toString () {
    return `[#${this.key}: ${this.value}]`
  }
}
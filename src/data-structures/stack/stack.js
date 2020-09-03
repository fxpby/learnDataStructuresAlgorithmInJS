/*
 * @Author: fxpby
 * @Date: 2020-09-02 19:17:47
 * @LastEditTime: 2020-09-02 21:15:55
 * @LastEditors: fxpby
 * @Description: 
 */
export default class Stack {
  constructor () {
    this.count = 0
    this.items = []
  }

  push (elements) {
    this.items[this.count] = elements
    this.count++
    return elements
  }

  size () {
    return this.items.length
  }

  isEmpty () {
    return this.items.length === 0
  }

  pop () {
    // if (this.isEmpty()) {
    //   return
    // }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.count - 1]
  }

  clear () {
    this.items = []
    this.count = 0
    // while (!this.isEmpty()) {
    //   this.pop()
    // }
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = ''
    for (let i = 0; i < this.count; i++) {
      str += this.items[i]
    }
    return str
  }
}
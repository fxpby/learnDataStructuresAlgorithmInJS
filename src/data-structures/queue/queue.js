/*
 * @Author: fxpby
 * @Date: 2020-09-02 22:12:14
 * @LastEditTime: 2020-09-03 13:58:01
 * @LastEditors: fxpby
 * @Description: 
 */
export default class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0 // 第一个元素
    this.items = {}
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 22:19:33
   * @description: 向队列尾部添加一个（或多个）新的项。
   * @param {*} 
   * @return {*} 
   */  
  enqueue (elements) {
    this.items[this.count] = elements
    this.count++
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 22:21:47
   * @description: 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
   * @return {*} 返回被移除的元素。
   */  
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  /**
   * @Author: fxpby
   * @Date: 2020-09-02 22:33:14
   * @description: 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
   * @return {*} 
   */  
  peek () {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.lowestCount]
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 22:31:09
   * @description: 如果队列中不包含任何元素，返回 true，否则返回 false。
   * @return {Boolean} 
   */  
  isEmpty () {
    return this.size() === 0
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 22:32:00
   * @description: 返回队列包含的元素个数，与数组的 length 属性类似。
   * @return {Number} 
   */  
  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }

  toString () {
    if (this.isEmpty()) {
      return
    }
    let str = ''
    for (let i = this.lowestCount; i < this.size(); i++) {
      str += `${this.items[i]}`
    }
    return str
  }
}
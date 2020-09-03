/*
 * @Author: fxpby
 * @Date: 2020-09-03 11:31:19
 * @LastEditTime: 2020-09-03 13:30:52
 * @LastEditors: fxpby
 * @Description: 双端队列
 */
export default class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  /**
   * @description: 该方法在双端队列前端添加新的元素。
   * @param {*} 
   * @return {*} 
   */  
  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0 ; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[0] = element
    }
  }

  /**
   * @description: 该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的 enqueue 方法相同）。
   * @param {*} 
   * @return {*} 
   */  
  addBack (element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * @description: 该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的 dequeue 方法相同）。
   * @return {*} 
   */  
  removeFront () {
    if (this.isEmpty()) {
      return
    }
    let result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  /**
   * @description: 该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的 pop 方法一样）。 
   * @return {*} 
   */  
  removeBack () {
    if (this.isEmpty()) {
      return
    }
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  /**
   * @description: 该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek 方法一样）。
   * @return {*} 
   */  
  peekFront () {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.lowestCount]
  }

  /**
   * @description: 该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek 方法一样）。 
   * @return {*} 
   */  
  peekBack () {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.count - 1]
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  size () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = ''
    for (let i = this.lowestCount; i < this.count; i++) {
      str += this.items[i]
    }
    return str
  }
}
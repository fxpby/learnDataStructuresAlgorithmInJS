/*
 * @Author: fxpby
 * @Date: 2020-09-03 16:11:40
 * @LastEditTime: 2020-09-04 17:41:41
 * @LastEditors: fxpby
 * @Description: 
 */
import { defaultEquals } from '../../util'

export class Node {
  constructor (element) {
    this.element = element
    this.next = undefined
  }
}

export class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  /**
   * @description: 向链表尾部添加一个新元素。
   * @param {*} 
   */  
  push (element) {
    const newNode = new Node(element)
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.count++
  }

  /**
   * @description: 向链表的特定位置插入一个新元素。
   * @param {*} 新元素
   * @param {Number} 指定位置
   * @return {Boolean} 
   */  
  insert (element, position) {
    const newNode = new Node(element)
    if (position < 0 || position > this.size()) {
      return undefined
    }
    if (position === 0) {
      let current = this.head
      newNode.next = current
      this.head = newNode
    } else {
      let pre = this.getElementAt(position - 1)
      newNode.next = pre.next
      pre.next = newNode
    }
    this.count++
    return true
  }

  /**
   * @description: 返回链表中特定位置的元素。如果链表中不存在这样的元素， 则返回 undefined。
   * @param {Number} 
   * @return { * | undefined } 
   */  
  getElementAt (index) {
    if (index < 0 || index >= this.size() || this.isEmpty()) {
      return undefined
    } else {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
  }

  /**
   * @description: 从链表中移除一个元素。
   * @param {type} 
   * @return {type} 
   */  
  remove (element) {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.removeAt(this.indexOf(element))
    }
  }

  /**
   * @description: 从链表的特定位置移除一个元素。
   * @param {Number} 
   * @return {*} 
   */  
  removeAt (index) {
    let current = this.head
    if (index < 0 || index >= this.size() || this.isEmpty()) {
      return undefined
    }
    if (index === 0) {
      this.head = current.next
    } else {
      let pre = this.getElementAt(index - 1)
      current = pre.next
      pre.next = current.next
    }
    this.count--
    return current.element
  }

  /**
   * @description: 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
   * @param {*} 
   * @return {Number} 
   */  
  indexOf (element) {
    let current = this.head
    let index = 0
    while (current.next) {
      if (this.equalsFn(element, current.element)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.head = undefined
    this.count = 0
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    } else {
      let str = ''
      for (let i = 0; i < this.size(); i++) {
        str += `${this.getElementAt(i).element}`
      }
      return str
    }
  }

  getHead () {
    return this.head
  }
}
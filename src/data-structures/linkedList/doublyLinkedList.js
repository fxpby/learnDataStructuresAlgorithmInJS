/*
 * @Author: fxpby
 * @Date: 2020-09-03 22:15:50
 * @LastEditTime: 2020-09-04 00:29:17
 * @LastEditors: fxpby
 * @Description: 
 */
import { LinkedList } from './linkList'
import { defaultEquals } from '../../util'

export class Node {
  constructor (element) {
    this.element = element
    this.prev = undefined
    this.next = undefined
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super (equalsFn)
    this.tail = undefined
  }

  /**
   * @description: 向链表尾部添加一个新元素。
   * @param {*} 
   */  
  push (element) {
    const newNode = new Node(element)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.count++
  }

  /**
   * @description: 向链表的特定位置插入一个新元素。
   * @param {*} 新元素
   * @param {Number} 指定位置
   * @return {Boolean} 
   */ 
  insert (element, index) {
    if (index < 0 || index >= this.size()) {
      return undefined
    }
    const newNode = new Node(element)
    if (index === 0) {
      if (this.isEmpty()) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (index === this.size()) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else {
      let previous = this.getElementAt(index - 1)
      let current = previous.next
      newNode.next = current
      current.prev = newNode
      newNode.prev = previous
    }
    this.count++
    return true
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
      this.head = this.head.next
      if (this.size() === 1) {
        this.tail = undefined
      } else {
        this.head.prev = undefined
      }
    } else if (index === this.size() - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = undefined
    } else {
      let pervious = this.getElementAt(index - 1)
      current = pervious.next
      current.prev = pervious
      pervious.next = current.next
    }
    this.count--
    return current.element
  }

  inverseToString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = ''
    let pervious = this.tail.prev
    while (pervious) {
      str += pervious.element
      pervious = pervious.prev
    }
    return str
  }
}
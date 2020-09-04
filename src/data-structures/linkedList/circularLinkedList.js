/*
 * @Author: fxpby
 * @Date: 2020-09-04 15:17:39
 * @LastEditTime: 2020-09-04 16:27:21
 * @LastEditors: fxpby
 * @Description: 单向循环链表
 */
import { LinkedList } from './linkList'
import { defaultEquals } from '../../util'

export class Node {
  constructor (element) {
    this.element = element
    this.next = undefined
  }
}

export class CircularLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super (equalsFn)
  }

  push (element) {
    const newNode = new Node(element)
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let tail = this.getElementAt(this.size() - 1)
      tail.next = newNode
    }
    newNode.next = this.head
    this.count++
  }

  insert (element, index) {
    const newNode = new Node(element)
    if (index < 0 || index >= this.size()) {
      return undefined
    }
    if (index === 0) {
      if (this.isEmpty()) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let tail = this.getElementAt(this.size())
        newNode.next = this.head
        this.head = newNode
        tail.next = this.head
      }
    } else {
      let pervious = this.getElementAt(index - 1)
      let current = pervious.next
      pervious.next = newNode
      newNode.next = current
    }
    this.count++
    return true
  }

  removeAt (index) {
    let current = this.head
    if (index < 0 || index >= this.size() || this.isEmpty()) {
      return undefined
    }
    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined
      } else {
        let result = this.head
        current = this.getElementAt(this.size() - 1)
        this.head = this.head.next
        tail.next = this.head
        current = result
      }
    } else {
      let pervious = this.getElementAt(index - 1)
      current = pervious.next
      pervious.next = current.next
    }
    this.count--
    return current.element
  }
}
/*
 * @Author: fxpby
 * @Date: 2020-09-04 16:29:22
 * @LastEditTime: 2020-09-04 17:46:38
 * @LastEditors: fxpby
 * @Description: 
 */
import { Compare, defaultCompare, defaultEquals } from '../../util'
import { LinkedList } from './linkList'

export class SortedLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals, compareFn = defaultCompare) {
    super (equalsFn)
    this.equalsFn = equalsFn
    this.compareFn = compareFn
  }

  push (element) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      const index = this.getIndexNextSortedElement(element)
      super.insert(element, index)
    }
  }

  insert (element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const position = this.getIndexNextSortedElement(element)
    return super.insert(element, position)
  }

  
  /**
   * @description: 找到插入元素的正确位置
   * @param {*} 
   * @return {Number} 
   */  
  getIndexNextSortedElement (element) {
    // debugger
    if (this.isEmpty()) {
      return false
    } else {
      let current = this.head
      let i = 0
      for (; i < this.size(); i++) {
        const result = this.compareFn(element, current.element)
        if (result === Compare.LESS_THAN) {
          return i
        }
        current = current.next
      }
      return i
    }
  }
}
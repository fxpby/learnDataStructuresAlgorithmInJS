/*
 * @Author: fxpby
 * @Date: 2020-09-06 08:27:54
 * @LastEditTime: 2020-09-06 09:48:12
 * @LastEditors: fxpby
 * @Description: 
 */
import { defaultCompare, swap, Compare, reverseCompare } from '../../util'

export class MinHeap {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  
  /**
   * @description: 它的左侧子节点的位置是 2 * index + 1（如果位置可用）
   * @param {number} index 索引值 
   * @return {number} 左侧子节点索引值 
   */  
  getLeftIndex (index) {
    return 2 * index + 1
  }

  /**
   * @description: 它的右侧子节点的位置是 2 * index + 2（如果位置可用）
   * @param {number} index 索引值
   * @return {number} 右侧子节点索引值 
   */  
  getRightIndex (index) {
    return 2 * index + 2
  }

  /**
   * @description: 它的父节点位置是 index / 2（如果位置可用）。
   * @param {number} index 索引值
   * @return {number} 父节点索引值
   */  
  getParentIndex (index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  /**
   * @description: 这个方法向堆中插入一个新的值。
   * @param {*} value
   * @return {boolean} 如果插入成功，它返回 true，否 则返回 false。
   */  
  insert (value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  /**
   * @description: 移除最小值（最小堆）或最大值（最大堆），并返回这个值。
   * @return {*} 
   */  
  extract () {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap.shift()
    this.siftDown(0)
    return removedValue
  }

  siftDown (index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }

  /**
   * @description: 返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
   * @return {*} 
   */  
  findMinimum () {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  /**
   * @description: 上移操作
   * @param {number} value 
   * @return {type} 
   */  
  siftUp (index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  size () {
    return this.heap.length
  }

  isEmpty () {
    return this.size() === 0
  }
}

export class MaxHeap extends MinHeap {
  constructor (compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
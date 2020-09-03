/*
 * @Author: fxpby
 * @Date: 2020-09-03 14:26:20
 * @LastEditTime: 2020-09-03 14:50:13
 * @LastEditors: fxpby
 * @Description: 
 */
import Queue from './queue'
import Deque from './deque';

export default class PalindromeChecker extends Deque {
  constructor () {
    super()
  }

  /**
   * @description: 回文检查器
   * @param {String} 
   * @return {Boolean} 
   */  
  palindromeChecker (str) {
    if (str == null || str.length === 0) {
      return false
    }
    const deque = new Deque()
    let lowerStr = str.toLowerCase().split('').join('')
    for (let i = 0; i < lowerStr.length; i++) {
      deque.addBack(lowerStr.charAt(i))
    }
    let isEqual = true
    while (deque.size() > 1 && isEqual) {
      if (deque.peekFront() !== deque.peekBack()) {
        isEqual = false
      }
      deque.removeFront()
      deque.removeBack()
    }
    return isEqual
  }
}
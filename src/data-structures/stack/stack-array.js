/*
 * @Author: fxpby
 * @Date: 2020-09-02 18:38:50
 * @LastEditTime: 2020-09-03 12:38:51
 * @LastEditors: fxpby
 * @Description: 
 */
export default class StackArray {
  constructor () {
    this.items = []
  }

  
  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:41:31
   * @description:添加一个或几个新元素到栈顶 
   * @param {*} 添加到栈顶的元素
   * @return {*} 添加到栈顶的元素
   */  
  push (elements) {
    return this.items.push(elements)
  }


  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:43:53
   * @description: 移除栈顶的元素，同时返回被移除的元素。
   * @return {*} 返回被移除的元素
   */  
  pop () {
    return this.items.pop()
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:47:16
   * @description: 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
   * @return {*} 返回栈顶的元素
   */  
  peek () {
    return this.items[this.items.length - 1]
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:48:18
   * @description: 如果栈里没有任何元素就返回 true，否则返回 false。
   * @return {*} 如果栈里没有任何元素就返回 true，否则返回 false。
   */  
  isEmpty () {
    return this.items.length === 0
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:55:20
   * @description: 移除栈里的所有元素。
   */  
  clear () {
    this.items = []
  }

  /**
   * @Author: fxpby
   * @Date: 2020-09-02 18:56:30
   * @description: 返回栈里的元素个数。该方法和数组的 length 属性很类似。 
   * @return {number} 返回栈里的元素个数
   */  
  size () {
    return this.items.length
  }
}

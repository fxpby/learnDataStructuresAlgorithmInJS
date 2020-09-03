/*
 * @Author: fxpby
 * @Date: 2020-09-02 20:29:12
 * @LastEditTime: 2020-09-02 21:36:54
 * @LastEditors: fxpby
 * @Description: 
 */
import Stack from './stack'

export default class NewStack extends Stack {
  constructor () {
    super()
  }
  decimalToBinary (devNum) {
    const stack = new Stack()
    let rem = 0
    let str = ''
    while (devNum > 0) {
      rem = Math.floor(devNum % 2)
      stack.push(rem)
      devNum = Math.floor(devNum / 2)
    }
    for (let i = stack.size() - 1; i >= 0; i--) {
      str += stack.items[i]
    }
    return str
  }
}

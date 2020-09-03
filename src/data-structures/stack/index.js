/*
 * @Author: fxpby
 * @Date: 2020-09-02 18:38:34
 * @LastEditTime: 2020-09-02 22:43:26
 * @LastEditors: fxpby
 * @Description: 
 */
import StackArray from './stack-array'
import Stack from './stack'
import decimalToBinary from './decimalToBinary'

// const stack = new StackArray()
const stack = new decimalToBinary()

// stack.push(1)
// stack.push(3)
// stack.push(2)
// stack.push(6)
// stack.push(4)
// stack.push(9)
// console.log(stack.items);
// console.log(stack.toString());
// console.log(Object.getOwnPropertyNames(stack)); // {1} 
// console.log(Object.keys(stack)); // {2}
// console.log(Object.values(stack)); // {2}
// console.log(stack.items); // {3}
// console.log(stack.toString());
// console.log(stack.decimalToBinary(10));

export {
  StackArray,
  Stack,
  decimalToBinary
}
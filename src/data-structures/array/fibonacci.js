/*
 * @Author: fxpby
 * @Date: 2020-09-02 14:46:53
 * @LastEditTime: 2020-09-02 15:17:59
 * @LastEditors: fxpby
 * @Description: 
 */
/**
  * @Author: fxpby
  * @Date: 2020-09-02 15:17:01
  * @description: 求斐波那契数列前20个数，已知斐波那契数列中的前两项是1，从第三项开始，每一项都等于前两项之和
  * @return {Array} 返回斐波那契数列数组
  */
 export default function getFibonacciSum () {
  const fibonacci = []
  fibonacci[0] = 1
  fibonacci[1] = 1
  for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }
  return fibonacci
 }

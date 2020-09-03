/*
 * @Author: fxpby
 * @Date: 2020-09-02 14:46:24
 * @LastEditTime: 2020-09-02 18:03:55
 * @LastEditors: fxpby
 * @Description: 
 */
// 数组 - 斐波那契数列
import fibonacii from './fibonacci'
// console.log(fibonacii())

// 数组 - 插入第一项
import insertArrayFirstPosition from './insertFirst'
let array = [1, 2, 3, 4, 5]
// console.log(insertArrayFirstPosition(array, 6))

// 数组 - 删除第一项
import delArrayFirstPosition from './delFirst'
// console.log(delArrayFirstPosition(array))

// 数组 - 多维数组
import matrix3x3x3 from './matrix3x3x3'
// console.table(matrix3x3x3())

export {
  fibonacii,
  insertArrayFirstPosition,
  delArrayFirstPosition,
  matrix3x3x3
}
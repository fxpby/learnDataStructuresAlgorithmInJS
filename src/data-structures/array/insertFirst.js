/*
 * @Author: fxpby
 * @Date: 2020-09-02 15:12:13
 * @LastEditTime: 2020-09-02 15:27:22
 * @LastEditors: fxpby
 * @Description: 
 */
/**
 * @Author: fxpby
 * @Date: 2020-09-02 15:13:11
 * @description: 
 * @param {Array,any} arr, value 一个数组，向数组第一项追加的元素
 * @return {any} value 返回向数组第一项添加的元素
 */
export default function insertFirstPosition (arr = [], value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = value
  console.log(arr);
  return value
}
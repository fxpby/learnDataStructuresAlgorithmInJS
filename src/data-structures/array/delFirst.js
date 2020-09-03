/*
 * @Author: fxpby
 * @Date: 2020-09-02 15:30:11
 * @LastEditTime: 2020-09-02 15:33:46
 * @LastEditors: fxpby
 * @Description: 
 */
/**
 * @Author: fxpby
 * @Date: 2020-09-02 15:30:14
 * @description: 
 * @param {type} 
 * @return {type} 
 */
export default function delFirstPosition (arr = []) {
  let first = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length--
  console.log(arr);
  return first
}
/*
 * @Author: fxpby
 * @Date: 2020-09-02 15:59:26
 * @LastEditTime: 2020-09-02 16:06:26
 * @LastEditors: fxpby
 * @Description: 
 */
/**
 * @Author: fxpby
 * @Date: 2020-09-02 15:59:29
 * @description: 多维数组
 * @return {Array} 
 */
export default function matrix3x3x3 () {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr[i] = []
    for(let j = 0; j < 3; j++) {
      arr[i][j] = []
      for (let z = 0; z < 3; z++) {
        arr[i][j][z] = i + j + z
      }
    }
  }
  return arr
}

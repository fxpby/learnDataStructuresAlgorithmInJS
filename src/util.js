/*
 * @Author: fxpby
 * @Date: 2020-09-03 15:56:08
 * @LastEditTime: 2020-09-04 16:32:11
 * @LastEditors: fxpby
 * @Description: 工具函数
 */
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

export function defaultEquals (a, b) {
  return a === b
}

export function defaultCompare (a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
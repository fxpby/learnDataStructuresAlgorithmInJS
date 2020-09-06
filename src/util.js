/*
 * @Author: fxpby
 * @Date: 2020-09-03 15:56:08
 * @LastEditTime: 2020-09-06 09:47:00
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

export function defaultToString (item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

export function swap (array, a, b) {
  // const temp = array[a]
  // array[a] = array[b]
  // array[b] = temp
  [array[a], array[b]] = [array[b], array[a]]
}

export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
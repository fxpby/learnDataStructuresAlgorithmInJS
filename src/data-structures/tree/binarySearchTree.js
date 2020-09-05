/*
 * @Author: fxpby
 * @Date: 2020-09-05 15:56:08
 * @LastEditTime: 2020-09-05 16:06:12
 * @LastEditors: fxpby
 * @Description: 
 */
import Node from './node'
import { Compare, defaultCompare } from '../../util'

export default class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
}
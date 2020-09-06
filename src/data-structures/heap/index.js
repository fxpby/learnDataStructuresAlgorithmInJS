/*
 * @Author: fxpby
 * @Date: 2020-09-06 08:28:01
 * @LastEditTime: 2020-09-06 09:47:59
 * @LastEditors: fxpby
 * @Description: 
 */
import { MinHeap, MaxHeap } from './heap'

const h = new MaxHeap()
h.insert(2)
h.insert(3)
h.insert(4)
h.insert(5)
h.insert(1)
console.log(h);
h.extract()
console.log(h);


/*
 * @Author: fxpby
 * @Date: 2020-09-03 16:29:14
 * @LastEditTime: 2020-09-04 00:29:05
 * @LastEditors: fxpby
 * @Description: 
 */
import { LinkedList } from './linkList'

// const ld = new LinkedList()
// ld.push(1)
// ld.push(2)
// ld.push(3)
// ld.push(4)
// ld.push(5)
// ld.push(6)
// console.log(ld);
// console.log(ld.getElementAt(2));
// console.log(ld.indexOf(4));
// console.log(ld.insert(999, 3));
// console.log(ld.toString());

import { DoublyLinkedList } from './doublyLinkedList'
const dll = new DoublyLinkedList()
dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)
dll.push(5)
dll.push(6)
// console.log(dll);
// dll.insert(999, 2)
// console.log(dll);
// dll.removeAt(2)
console.log(dll.inverseToString());

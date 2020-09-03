/*
 * @Author: fxpby
 * @Date: 2020-09-02 22:39:51
 * @LastEditTime: 2020-09-03 14:50:02
 * @LastEditors: fxpby
 * @Description: 
 */
import Queue from './queue';

// const queue = new Queue()
// queue.enqueue('1aa') 
// queue.enqueue('2bb') 
// queue.enqueue('3cc') 
// queue.enqueue('4dd') 
// queue.enqueue('5ee') 
// queue.enqueue('6ff') 
// console.log(queue.items);
// console.log(queue.size());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.items);
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue.toString());

import Deque from './deque'
// const deque = new Deque()
// deque.addBack('1aa') 
// deque.addBack('2bb') 
// deque.addBack('3cc') 
// deque.addBack('4dd') 
// deque.addBack('5ee') 
// deque.addBack('6ff') 
// console.log(deque);
// deque.addFront('7gg')
// console.log(deque);
// console.log(deque.toString());

import QueueGame from './hotPotato'

// let arr = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'j']
// const q = new QueueGame()
// console.log(q.hotPotato(arr, 3));

import PalindromeChecker from './palindromeChecker'

const p = new PalindromeChecker()
let str = 'madam'
console.log(p.palindromeChecker(str));

export {
  Queue,
  Deque,
  QueueGame
}
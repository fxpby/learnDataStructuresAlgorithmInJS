/*
 * @Author: fxpby
 * @Date: 2020-09-02 22:39:51
 * @LastEditTime: 2020-09-02 23:10:07
 * @LastEditors: fxpby
 * @Description: 
 */
import Queue from './queue';

const queue = new Queue()
queue.enqueue('1aa') 
queue.enqueue('2bb') 
queue.enqueue('3cc') 
queue.enqueue('4dd') 
queue.enqueue('5ee') 
queue.enqueue('6ff') 
console.log(queue.items);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.items);
console.log(queue.size());
console.log(queue.peek());
// console.log(queue.toString());

export {
  Queue
}
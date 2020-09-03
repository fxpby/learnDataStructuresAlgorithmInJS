/*
 * @Author: fxpby
 * @Date: 2020-09-03 13:35:49
 * @LastEditTime: 2020-09-03 14:11:12
 * @LastEditors: fxpby
 * @Description: 
 */
import Queue from './queue'

export default class QueueGame extends Queue {
  constructor (){
    super()
  }
  /**
   * @description: 击鼓传花
   * @param {Array} 游戏参与者数组
   * @param {Number} 传递次数
   * @return {*} 胜利者名称 
   */  
  hotPotato (elementList, num) {
    const queue = new Queue()
    for (let i = 0; i < elementList.length; i++) {
      queue.enqueue(elementList[i])
    }
    while (queue.size() > 1) {
      for (let i = 0; i < num; i++) {
        queue.enqueue(queue.dequeue())
      }
      queue.dequeue()
    }
    return queue.items[queue.lowestCount]
  }
}
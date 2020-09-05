/*
 * @Author: fxpby
 * @Date: 2020-09-05 10:06:05
 * @LastEditTime: 2020-09-05 11:29:55
 * @LastEditors: fxpby
 * @Description: 
 */
import { defaultToString } from '../../util'
import { ValuePair } from './valuePair'

export default class HashTable {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * @description: loselose散列函数 
   * @param {String} 
   * @return {Number} 返回hashCode 
   */  
  loseloseHashCode (key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode (key) {
    return this.loseloseHashCode(key)
  }

  /**
   * @description: 向散列表增加一个新的项（也能更新散列表）。
   * @param {String} 
   * @param {*}
   * @return {type} 
   */  
  put (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  /**
   * @description: 根据键值从散列表中移除值。
   * @param {String} 
   * @return {type} 
   */  
  remove (key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash] // 也可以将该hash位置赋值为null or undefined
      return true
    }
    return false
  }

  /**
   * @description: 返回根据键值检索到的特定的值。
   * @param {String} 
   */  
  get (key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let str = ''
    for (let i = 0; i < keys.length; i++) {
      str += `${keys[i]} => ${this.table[keys[i]].toString()} \n`
    }
    return str
  }
}
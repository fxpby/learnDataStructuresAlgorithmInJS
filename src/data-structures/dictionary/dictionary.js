/*
 * @Author: fxpby
 * @Date: 2020-09-05 08:02:57
 * @LastEditTime: 2020-09-05 09:50:05
 * @LastEditors: fxpby
 * @Description: 
 */
import { defaultToString } from '../../util'
import { ValuePair } from './valuePair'

export default class Dictionary {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {} // table[key] = {key, value}
  }

  /**
   * @description: 向字典中添加新元素。如果 key 已经存在，那么已存在的 value 会 被新的值覆盖。
   * @param {String} 
   * @param {*}
   * @return {type} 
   */  
  set (key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  /**
   * @description: 通过使用键值作为参数来从字典中移除键值对应的数据值。
   * @param {String} 
   * @return {*} 
   */  
  remove (key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  /**
   * @description: 如果某个键值存在于该字典中，返回 true，否则返回 false。
   * @param {String} 
   * @return {Boolean} 
   */  
  hasKey (key) {
    return this.table[this.toStrFn(key)] !== null
  }

  /**
   * @description: 通过以键值作为参数查找特定的数值并返回。
   * @param {String} 
   * @return {*} 
   */  
  get (key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  /**
   * @description: 删除该字典中的所有值。
   */  
  clear () {
    this.table = {}
  }

  /**
   * @description: 返回字典所包含值的数量。与数组的 length 属性类似。
   * @return {Number} 
   */  
  size () {
    return Object.keys(this.table).length
  }

  /**
   * @description: 在 size 等于零的时候返回 true，否则返回 false。
   * @return {Boolean} 
   */  
  isEmpty () {
    return this.size() === 0
  }

  /**
   * @description: 将字典所包含的所有 键名 以数组形式返回。
   * @return {Array} 
   */  
  keys () {
    return this.keyValues().map(valuePair => valuePair.key)
  }

  /**
   * @description: 将字典所包含的所有 数值 以数组形式返回。
   * @return {Array} 
   */  
  values () {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  /**
   * @description: 将字典中所有[键，值]对返回。
   * @return {type} 
   */  
  keyValues () {
    return Object.values(this.table)
  }

  /**
   * @description: 迭代字典中所有的键值对。
   *               callbackFn 有两个参数：key 和 value。
   *               该方法可以在回调函数返回false时被中止（和Array 类中的every 方法相似）
   * @param {Function} 
   */  
  forEach (callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = ''
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      str += `${valuePairs[i].toString()}`
    }
    return str
  }
}
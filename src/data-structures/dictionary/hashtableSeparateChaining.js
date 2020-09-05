import { defaultToString } from '../../util'
import { LinkedList } from '../linkedList/linkList'
import { ValuePair } from './valuePair'

export default class HashTableSeparateChaining {
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

  /**
   * @description: djb2散列函数
   * @param {String} 
   * @return {Number} 
   */  
  djb2HashCode (key) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }

  hashCode (key) {
    // return this.loseloseHashCode(key)
    return this.djb2HashCode(key)
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
      // this.table[position] = new ValuePair(key, value)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
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
    // debugger
    // const valuePair = this.table[hash]
    // if (valuePair != null) {
    //   delete this.table[hash] // 也可以将该hash位置赋值为null or undefined
    //   return true
    // }
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList == null && linkedList.isEmpty()) {
      return false
    }
    let current = linkedList.getHead()
    while (current != null) {
      if (current.element.key === key) {
        linkedList.remove(current.element)
        if (linkedList.isEmpty()) {
          delete this.table[position]
        }
        return true
      }
      current = current.next
    }
  }

  /**
   * @description: 返回根据键值检索到的特定的值。
   * @param {String} 
   */  
  get (key) {
    // const valuePair = this.table[this.hashCode(key)]
    // return valuePair == null ? undefined : valuePair.value
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList == null && linkedList.isEmpty()) {
      return undefined
    }
    let current = linkedList.getHead()
    while (current != null) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
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
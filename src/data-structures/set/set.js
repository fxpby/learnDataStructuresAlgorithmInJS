/*
 * @Author: fxpby
 * @Date: 2020-09-04 17:57:35
 * @LastEditTime: 2020-09-04 22:40:19
 * @LastEditors: fxpby
 * @Description: 
 */
export default class Set {
  constructor () {
    this.items = {}
  }

  /**
   * @description: 向集合添加一个新元素。
   * @param {*} 
   * @return {Boolean} 
   */  
  add (element) {
    if (this.has(element)) {
      return false
    } else {
      this.items[element] = element
      return true
    }
  }

  /**
   * @description: 从集合移除一个元素。
   * @param {*} 
   * @return {*} 
   */  
  delete (element) {
    if (!this.has(element)) {
      return false
    } else {
      delete this.items[element]
      return true
    }
  }

  /**
   * @description: 如果元素在集合中，返回 true，否则返回 false。
   * @param {*} 
   * @return {Boolean} 
   */  
  has (element) {
    return element in this.items
    // return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  /**
   * @description: 移除集合中的所有元素
   */  
  clear () {
    this.items = {}
  }

  /**
   * @description: 返回集合所包含元素的数量。
   * @return {Number} 
   */  
  size () {
    return Object.keys(this.items).length
  }

  sizeLegacy () {
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }

  /**
   * @description: 返回一个包含集合中所有值（元素）的数组。
   * @return {Array} 
   */  
  values () {
    return Object.values(this.items)
  }

  valuesLegacy () {
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }

  /**
   * @description: 并集
   * @param {Object} 
   * @return {Object} 
   */  
  union (otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  /**
   * @description: 交集 
   * @param {Object} 
   * @return {Object} 
   */  
  intersection (otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let bigger = values
    let smaller = otherValues
    if (otherValues.length - values.length > 0) {
      bigger = otherValues
      smaller = values
    }
    smaller.forEach(ele => {
      if (bigger.includes(ele)) {
        intersectionSet.add(ele)
      }
    })
    return intersectionSet
  }

  /**
   * @description: 差集
   * @param {Object} 
   * @return {Object} 
   */  
  difference (otherSet) {
    const differenceSet = new Set()
    this.values().forEach(ele => {
      if (!otherSet.has(ele)) {
        differenceSet.add(ele)
      }
    })
    return differenceSet
  }

  /**
   * @description: 子集
   * @param {Object} 
   * @return {Object} 
   */  
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSub = true
    this.values().every(ele => {
      if (!otherSet.has(ele)) {
        isSub = false
        return false
      }
      return true
    })
    return isSub
  }
}
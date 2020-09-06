/*
 * @Author: fxpby
 * @Date: 2020-09-05 15:56:08
 * @LastEditTime: 2020-09-06 00:19:06
 * @LastEditors: fxpby
 * @Description: 
 */
import Node from './node'
import { Compare, defaultCompare } from '../../util'

export default class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn // 比较节点值
    this.root = null // 根节点
  }

  /**
   * @description: 插入节点方法
   * @param {Object} node 节点
   * @param {*} key 键
   */  
  insertNode (node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  /**
   * @description: 向树中插入一个新的键。
   * @param {*} key 键
   */  
  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }

  }

  /**
   * @description: 通过先序遍历方式遍历所有节点。
   * @param {type} 
   * @return {type} 
   */  
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @description: 通过中序遍历方式遍历所有节点。
   * @param {type} 
   * @return {type} 
   */  
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode (node, callback) {
    if (node != null) {
      this.inOrderTraverseNode (node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @description: 通过后序遍历方式遍历所有节点。
   * @param {type} 
   * @return {type} 
   */  
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode (node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  /**
   * @description: 返回树中最小的值/键。
   * @param {type} 
   * @return {type} 
   */  
  min () {
    return this.minNode(this.root)
  }

  minNode (node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  /**
   * @description: 返回树中最大的值/键。
   * @param {type} 
   * @return {type} 
   */  
  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search (key) {
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  /**
   * @description: 从树中移除某个键。
   * @param {type} 
   * @return {type} 
   */  
  remove (key) {
    return this.removeNode(this.root, key)
  }

  removeNode (node, key) {
    // debugger
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else
      
      // key === node.key 叶节点
      if (node.left == null && node.right == null) {
        node = null
        return node
      }

      // 只有一个子节点
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }

      // 有2个子节点 找到后继 即 右子树的最小节点
      
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
  }
}
/*
 * @Author: fxpby
 * @Date: 2020-09-05 15:55:50
 * @LastEditTime: 2020-09-06 09:24:03
 * @LastEditors: fxpby
 * @Description: 
 */
import BinarySearchTree from './binarySearchTree'

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(3)
tree.insert(9)
tree.insert(13)
tree.insert(20)
tree.insert(8)
tree.insert(10)

tree.insert(12)
tree.insert(14)
tree.insert(18)
tree.insert(25)

// console.log(tree);

const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.remove(15));
// console.log(tree);




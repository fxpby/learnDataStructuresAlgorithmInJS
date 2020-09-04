/*
 * @Author: fxpby
 * @Date: 2020-09-04 20:06:26
 * @LastEditTime: 2020-09-04 22:42:07
 * @LastEditors: fxpby
 * @Description: 
 */
import Set from './set'

// let set = new Set()
// set.add('a')
// console.log(set.values());
// console.log(set.has('a'));
// console.log(set.size());

// set.add('b')
// console.log(set);

// set.delete('a')
// console.log(set);


const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)

const setC = new Set()
setC.add(1)
setC.add(2)

const unionAB = setC.isSubsetOf(setA)
console.log(unionAB);

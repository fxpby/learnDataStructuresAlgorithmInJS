/*
 * @Author: fxpby
 * @Date: 2020-09-05 08:03:04
 * @LastEditTime: 2020-09-05 14:53:31
 * @LastEditors: fxpby
 * @Description: 
 */
import Dictionary from './dictionary'

// const d = new Dictionary()
// d.set(11, 1)
// d.set(21, 2)
// d.set(31, 3)
// d.set(41, 4)
// d.set(51, 5)
// console.log(d);
// console.log(d.keyValues());
// console.log(d.keys());
// console.log(d.values());
// d.forEach((k, v) => {
//   console.log('forEach:', `key: ${k}, value: ${v}`);
// })
// d.remove(21)
// console.log(d.toString());

import HashTable from './hashtable'


import HashTableSeparateChaining from './hashtableSeparateChaining';

const ht = new HashTableSeparateChaining()
ht.put(11, 1)
ht.put('bb', 2)
ht.put(33, 3)
ht.put('d', 4)
ht.put(55, 5)
console.log(ht);
console.log(ht.get(11));
// console.log(ht.remove('d'));
// console.log(ht.get('d'));
// console.log(ht.toString());
// ht.remove(11)
// console.log(ht.toString());
ht.remove('bb')
ht.remove(11)
console.log(ht.toString());



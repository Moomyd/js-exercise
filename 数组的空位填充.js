/*关键点就是在对空位和undefined的判断上

数组的空位会反映在length属性上，占据了数组的一个位置，但是内容未定义，如果使用下标读取，结果就是undefined

用in运算符、hasOwnProperty都会对数组空位的下标返回false

此外，map会跳过空位，但是在结果里面保留这个值，而every、filter、forEach、some都会直接跳过空位

ES6中的Array.from、解构、for...of都会将空位作为undefined处理，而Object.keys不会取到空位的下标

关键一点就是，空位实际上是没有下标的~
*/
const fillEmpty = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if(!arr.hasOwnProperty(i)) {
        arr[i] = 'Hello'
      }
    }
    return arr;
  }
const a = [, , null, undefined, 'OK', ,]
console.log(fillEmpty(a));
/*对待空位：

判断空位，对下标使用in或者hasOwnProperty判断
对下标处理，使用Array.from、数组解构或者for...of，将空位当当做undefined处理
其他大部分方法forEach/some/filter/every/Object.keys都会略过空位不进行处理
不同方法对空位处理差异很大，所以要避免尽量出现空位
*/
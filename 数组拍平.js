const arr = [1, [[2], 3, 4], 5];

const flatten = arr => {
  return arr.reduce((flat, toFlat) => {
    return flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat);//如果toFlat是数组就再次拍平
  }, []);
};

const res = flatten(arr);

console.log(res);//=>[1,2,3,4,5]

//运用生成器函数来写
function* flatten2(a){
    for(let i=0;i<a.length;i++){
        if(typeof a[i]!=='number')
           yield* flatten2(a[i]);
        else
           yield a[i];
    }
}
const numbers = flatten2([1, [[2], 3, 4], 5])
console.log(numbers.next().value);// => 1
console.log(numbers.next().value);// => 2
console.log(numbers.next().value);// => 3
console.log(numbers.next().value);// => 4
console.log(numbers.next().value);// => 5
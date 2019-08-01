const compose = (...rest) => {
    return (part) => {
      for(let i = rest.length - 1; i>=0 ;i--){
        part = rest[i](part); 
      }
      return part;
    }
  }
const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2
const operate = compose(div2, mul3, add1, add1)
console.log(operate(0));//=>3



//从网上看到的一行代码实现的方法
//reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
const compose = (...fns) => {
    return x => fns.reduceRight((v, f) => f(v), x);
  }

  
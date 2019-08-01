function plusOne(digits){
    let arr=digits;
    let i=arr.length-1;
    arr[i]=arr[i]+1;
    return arr;
}
console.log(plusOne([1,2,3]));//=>[1,2,4]
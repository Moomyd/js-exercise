const fibonacci=(n)=>{
    let arr=[0,1,1];
    let i=3;
    if(n===1||n===2){
        return 1;
    }
    while(i){
        arr[i]=arr[i-1]+arr[i-2];
        if(n===i){
            return arr[i];
        }
        i++;
    }
}
console.log(fibonacci(1));//=>1
console.log(fibonacci(2));//=>1
console.log(fibonacci(3));//=>2
console.log(fibonacci(4));//=>3


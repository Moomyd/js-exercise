function partition(array,k){
    let arr=array.sort();
    if(arr==false)
       return 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==k)
           return i;
    }
}
console.log(partition([3,1,2,2],2));//=>1
console.log(partition([],2));//=>0
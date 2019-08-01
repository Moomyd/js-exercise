//给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
function containsDuplicate(nums,k){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]&&Math.abs(i-j)==k)
               return true;
        }
    }
  return false;
}
console.log(containsDuplicate([1,2,3,1],3));//=>true
console.log(containsDuplicate([1,0,1,1],1));//=>true
console.log(containsDuplicate([1,2,3,1,2,3],2));//=>false


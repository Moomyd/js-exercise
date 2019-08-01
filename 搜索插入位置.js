function searchInsert(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
          return i;
        else{
            if(nums[i]<target&&nums[i+1]>target)
               return i+1;
            if(i===nums.length-1&&nums[i]<target)
               return i+1;
            if(target<nums[0])
              return 0;
        }
    }
}
console.log(searchInsert([1,3,5,6],5));//=>2
console.log(searchInsert([1,3,5,6],2));//=>1
console.log(searchInsert([1,3,5,6],7));//=>4
console.log(searchInsert([1,3,5,6],0));//=>0

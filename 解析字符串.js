function extractStr(str) 
{
    let result = [];
    let targets = str.split(".").slice(0, -1);//-1表示最后一个元素
    targets.forEach(target=>{//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
        let position = target.lastIndexOf(":");//lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
        if( position >= 0){
            result.push(target.substring(position + 1));
        }
    });
    return result;
}
console.log(extractStr('My name is:Jerry. My age is:12.'));
function strStr(haystack,needle){
    if(needle.length > haystack.length){
        return -1;
    }
    let subStr = '';
    for(let i=0,len=haystack.length;i<len;i++){
        if(haystack[i] === needle[0]){
            subStr = haystack.substr(i,needle.length);
            if(subStr == needle){
                return i;
            }
        }
    }
    return -1;
}
console.log(strStr("aaaa","bba"));//=>-1
console.log(strStr("hello","ll"));//=>2
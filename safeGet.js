function safeGet(data,path){
    let arr=path.split('.');
    let d=data;
    for(let i=0;i<arr.length;i++){
        if(d[arr[i]]==undefined) return undefined;
        d = d[arr[i]]; 
    }
    return d;
}
var data = { a: { b: { c: 'ScriptOJ' } } }
console.log(safeGet(data, 'a.b.c') );// => scriptoj
console.log(safeGet(data, 'a.b.c.d')); // => 返回 undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g')); // => 返回 undefined
console.log('ScriptOJ') // => 打印 ScriptOJ
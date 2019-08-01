function injectSections(items,sections){
    sections.forEach(
        (v,i)=>{
            items[v.index]=[v.content,items[v.index]]
        }
    );
    return [].concat.apply([],items);
}
console.log(injectSections(['item1', 'item2', 'item3', 'item4', 'item5'],[{ content: 'section1', index: 0 },{ content: 'section2', index: 2 }]));
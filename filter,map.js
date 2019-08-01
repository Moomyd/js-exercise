function filterWithIndex (i) {
    return function (filter) {
    return new Map([...this.entries()].filter((kv) => filter(kv[i])));
    }
}
    
    Map.prototype.filterKeys = filterWithIndex(0);
    Map.prototype.filterValues = filterWithIndex(1);
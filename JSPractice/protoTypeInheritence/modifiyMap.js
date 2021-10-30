Array.prototype.map = function() {
    const arr = [];
    for(var i = 0; i < this.length; i++){
        arr.push(this[i] + '*');
    }
    return arr;
}

console.log([1,2,3].map())



// [1*, 2*, 3*]
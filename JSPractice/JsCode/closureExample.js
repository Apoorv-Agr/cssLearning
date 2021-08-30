function abc() {
    let aVar = 10;
    function abcInner(){
        console.log("aVar : ",aVar);
    }
    return abcInner;
}

const abcVal = abc(); 
abcVal();
let count = 0;
const searchFn = (params1) => {
    console.log("count : ", count++, ", params :", params1);
    // API Calls
}
const myDebounce = function (fn, delay) {
    let timer;
    return function () {
        const currentThis = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(currentThis, args);
        }, delay);
    }

}

const onSearch = myDebounce(searchFn, 1000);
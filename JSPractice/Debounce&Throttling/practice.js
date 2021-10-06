console.log("In Here")

const onSearch = () => {
    const searchText = document.getElementById("searchBar").value;
    if (searchText) console.log(searchText);
}


function myDebounce(fn, delay) {
    let timerRef;
    const args = arguments;
    const context = this;
    return function () {
        clearTimeout(timerRef);
        timerRef = setTimeout(() => {
            fn.apply(context, [args]);
        }, delay);
    }
}


const optimizedSearch = myDebounce(onSearch, 400);


const btnClick = () => {
    console.log('btn click');
}

function myThrottlingFn(fn, limiter = 10) {
    let callFn = true;
    const args = arguments;
    const context = this;
    return function () {
        if (callFn) {
            callFn = false;
            fn.apply(context, args);
            setTimeout(() => {
                callFn = true;
            }, limiter)
        }
    }
}

const optimizedClickHandler = myThrottlingFn(btnClick, 800);



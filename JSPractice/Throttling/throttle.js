const resizeFn = function () {
    console.log('in resize function')
}

const myThrottleFn = function (fn, delay) {
    let callFnFlag = true;
    return function () {
        let context = this, args = arguments;
        if (callFnFlag) {
            fn.apply(context, [...arguments]);
            callFnFlag = false;
            setTimeout(() => {
                callFnFlag = true;
            }, delay)
        }
    }
}

const myClick = function() {
    console.log("Handle multiple Click")
}

const myFunction = myThrottleFn(resizeFn, 400);

window.addEventListener("resize", myFunction);


const handleClick = myThrottleFn(myClick,2000)



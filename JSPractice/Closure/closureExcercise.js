const mainFn = (function () {
    let view = "";
    let setViewCall = false;
    return function setView() {

        let fnCalled = false;
        function inner() {
            if (fnCalled || setViewCall) {
                return;
            } else {
                // i++;
                view = 'view set';
                console.log(view);
                fnCalled = true;
                setViewCall = true;
            }
        }
        return inner;
    }
})();

// console.log(mainFn);

const setViewOnce = mainFn();
setViewOnce();
setViewOnce();
setViewOnce();
const setViewTwo = mainFn();
setViewTwo();
setViewTwo();
setViewTwo();
setViewTwo();

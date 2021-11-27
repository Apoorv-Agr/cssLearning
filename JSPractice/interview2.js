function modifyArray(arr, callback) {
    arr.push(100); // [10, 2, 3, 14, 55,100]
    arr.pop(0); // [10, 2, 14, 55,100]
    arr.shift(3); // [10, 2, 14, 55, 100]
    callback();
}
var arr = [10, 2, 3, 14, 55];
modifyArray(arr, function () {
    console.log(arr);
});

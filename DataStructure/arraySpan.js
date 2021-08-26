const arr1 = [10, 6, 5, 11, 28, 2, 7];

let max = arr1[0];
let min = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
    if (arr1[i] < min) {
        min = arr1[i];
    }
}



console.log(" max :  ", max, " min :", min, " span is :  ", (max - min));
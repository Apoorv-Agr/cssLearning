const arr1 = [11, 12, 13, 14, 15];

/*
    arr -> [11, 12, 13, 14, 15];
    Faith hai ki :- printArr(arr, 0) function  11, 12, 13, 14, 15 print kr dega
    Expectation ye h :- printArr(arr, 1) function 12,13,14,15 print kr dega
     Meeting Faith With Expectation :- printArr(arr, 0) -> arr[0] + printArr(arr, 1) 
 */

function printArr(arr, idx) {
    if (idx === arr.length) { return; }
    console.log(`Normal Order Element at ${idx} position : ${arr[idx]} `);
    printArr(arr, idx + 1);
}
printArr(arr1, 0);

/*
    arr -> [11, 12, 13, 14, 15];
    Faith hai ki :- printArrRev(arr,0) pass karne pe ye function 15,14,13,12,11 --> print kr dega
    Expectation ye h :-  printArrRev(arr,1) -> ye function 15,14,13,12 --> print kr dega
    Meeting Faith With Expectation :- printArrRev(arr,0) -> printArrRev(arr,1) + arr[0]
*/

function printArrRev(arr, idx) {
    // base condition
    if (idx === arr.length) { return; }
    printArrRev(arr, idx + 1);
    console.log(`Reverse Order Element at ${idx} position : ${arr[idx]} `);
}
printArrRev(arr1, 0);
const binarySearch = (arr = [], searchEl = 0) => {
    let l = 0;
    let h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (searchEl > arr[mid]) {
            l = mid + 1;
        } else if (searchEl < arr[mid]) {
            h = mid - 1;
        } else {
            console.log('element found @index : ', mid);
            return mid;
        }
    }
    console.log('element was not found');
    return -1;
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

binarySearch(arr, 71);
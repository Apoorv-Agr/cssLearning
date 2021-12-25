const arr = [10, 10, 15, 20, 20, 20, 20, 20, 20, 30, 30, 40, 40, 40, 50, 70, 70];





const getFirstAndLastIdx = (arr = [], searchEl) => {
    const outPutObject = {
        fi: -1,
        li: -1,
    }

    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (searchEl < arr[mid]) {
            hi = mid - 1;
        } else if (searchEl > arr[mid]) {
            lo = mid + 1;
        } else {
            outPutObject.fi = mid;
            hi = mid - 1;
        }
    }
    lo = 0;
    hi = arr.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (searchEl < arr[mid]) {
            hi = mid - 1;
        } else if (searchEl > arr[mid]) {
            lo = mid + 1;
        } else {
            outPutObject.li = mid;
            lo = mid + 1;
        }
    }

    return outPutObject;
}

console.log('getFirstAndLastIdx : ', getFirstAndLastIdx(arr, 40));
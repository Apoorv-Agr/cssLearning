/* let num = 12345;

let revNum = 0;

while(num > 0) {
    let lastDigit = num %10;
    revNum = revNum*10+lastDigit;
    num = Math.floor(num/10)
}

 */

/* Sort an array of duplicate numbers in order of frequency of elements. If the frequency of two or more elements is the same, keep them in natural ascending order. 
eg Input - [2,1,9,1,2,5,1,6,1] 
Expected output - [5,6,9,2,2,1,1,1,1] */

let inputArr = [2, 1, 9, 1, 2, 5, 1, 6, 1, 3, 3];

let frequencyObj = {};

inputArr.map((el) => {
  if (frequencyObj[el] != null) {
    frequencyObj[el] += 1;
  } else {
    frequencyObj[el] = 1;
  }
});

const uniqueElemArr = Object.keys(frequencyObj).filter(
  (key) => frequencyObj[key] === 1
);

let finalDuplicateArr = [];

for (const [key, value] of Object.entries(frequencyObj)) {
  if (value > 1) {
    for (let i = 0; i < value; i++) {
      finalDuplicateArr.push(key);
    }
  }
}
finalDuplicateArr.sort((a, b) => {
  return b - a;
});

const response = uniqueElemArr.concat(finalDuplicateArr);

console.log("response : ", response);

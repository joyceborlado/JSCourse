//Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers.

// function firstPlusLength(arr) {
//     const sum = arr[0] + arr.length;
//     console.log(sum);
// }

// firstPlusLength([1,2,5]);

// function printEven4to22() {
//   let sum = 0;
//   for (let i = 4; i <= 22; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// printEven4to22();

function printPositives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      console.log(arr[i]);
    }
  }
}

printPositives([-1, 3, -5, 10]);

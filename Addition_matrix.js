let arr1 = [
  [4, 8],
  [3, 7],
];

let arr2 = [
  [1, 0],
  [5, 2],
];

let arr3 = [[], []];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    arr3[i][j] = arr1[i][j] + arr2[i][j];
  }
}
console.log(arr3);

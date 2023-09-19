function twoSum(arr, num) {
  let c1 = 0;
  let c2 = c1 + 1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[c1] + arr[c2] == num) {
      console.log(arr[c1], arr[c2]);
      return;
    }
    c1++;
  }
}

console.log(twoSum([2, 3, 1, 4], 7));

function BST(arr, num) {
  let left = arr[0];
  let middle = arr[Math.floor(arr.length / 2)];
  let right = arr[arr.length - 1];
  if (num == middle) return true;
  if (num < middle) {
    right = middle;
  } else {
    left = middle;
  }
}

BST([1, 3, 4, 5], 3);

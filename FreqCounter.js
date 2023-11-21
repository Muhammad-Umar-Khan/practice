function countOccurance(str) {
  let freq = {};
  for (let char of str.toLowerCase()) {
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      freq[char] = freq[char] + 1;
    }
  }
  return freq;
}

console.log(countOccurance("UmarKhanUni"));

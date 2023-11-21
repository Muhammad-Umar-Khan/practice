function countOccurance(str) {
  let freq = {};
  for (let char of str.toLowerCase()) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(countOccurance("UmarKhanUni"));

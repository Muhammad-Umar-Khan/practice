
function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numMap) {
      // Found a pair that adds up to the target
      return [numMap[complement], i];
    }

    // Store the current number and its index in the map
    numMap[nums[i]] = i;
  }

  // No solution found
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));

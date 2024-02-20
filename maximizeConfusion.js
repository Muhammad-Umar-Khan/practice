function maxConsecutiveAnswers(answerKey, k) {
    let maxConsecutive = 0;
    let left = 0;
    let maxCount = 0;
    let count = { 'T': 0, 'F': 0 };

    for (let right = 0; right < answerKey.length; right++) {
        count[answerKey[right]]++;
        maxCount = Math.max(maxCount, count[answerKey[right]]);

        while (right - left + 1 - maxCount > k) {
            count[answerKey[left]]--;
            left++;
        }

        maxConsecutive = Math.max(maxConsecutive, right - left + 1);
    }

    return maxConsecutive;
}

// Test the function
const answerKey = "TTFTTFTT";
const k = 1;
console.log(maxConsecutiveAnswers(answerKey, k)); // Output: 3

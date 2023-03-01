function getMaxSubSum(arr) {
	let maxSum = 0;
	let partSum = 0;
	for (let item of arr) {
		partSum += item;
		maxSum = Math.max(maxSum, partSum);
		if (partSum < 0) {
			partSum = 0;
		}
	}
	return maxSum;
}
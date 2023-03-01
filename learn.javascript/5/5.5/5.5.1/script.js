function camelize(str) {
	let strToArr = str.split('');
	for (let item of strToArr) {
		if (item === '-') {
			let idx = strToArr.findIndex(el => el === '-');
			strToArr.splice(idx, 1);
			strToArr[idx] = strToArr[idx].toUpperCase();
		}
	}
	return strToArr.join('');
}


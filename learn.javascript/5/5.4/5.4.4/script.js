function sumInput() {
	let arr = [];
	let sum = 0;
	while(true) {
		let arrEl = prompt('Введите значение');
		if (arrEl === '' || arrEl === null || !isFinite(arrEl)) break;
		arr.push(+arrEl);
	}
	for (let item of arr) {
		sum +=item;
	}
	return sum;
}
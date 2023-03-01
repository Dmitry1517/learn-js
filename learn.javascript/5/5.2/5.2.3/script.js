function readNumber() {
	let a;
	do {
		a = prompt('Введите числовое значение');
	} while (!isFinite(a));
	
	if (a === '' || a === null) {
		return null;
	}
	return +a;
}

readNumber();

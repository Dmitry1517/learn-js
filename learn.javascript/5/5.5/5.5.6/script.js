function Calculator() {
	this.mathAction = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	}

	this.addMethod = function(name, func) {
		this.mathAction[name] = func;
	}

	this.calculate = function(str) {
		let arr = str.split(' ');
		a = +arr[0];
		action = arr[1];
		b = +arr[2];
		return this.mathAction[action](a, b);
	}
}

let calc = new Calculator();
console.log(calc.calculate('15 - 25'));

let powerCalc = new Calculator();
powerCalc.addMethod('**', (a, b) => a ** b);
console.log(powerCalc.calculate('5 ** 3'));
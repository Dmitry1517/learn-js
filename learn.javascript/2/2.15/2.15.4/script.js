function pow(x, n) {
	return x ** n;
}

let x = prompt('Введите число x');
let n = prompt('Введите степень n');

if (n >= 1) {
	alert(pow(x, n));
} else {
	alert('Введите другую стпепень');
}
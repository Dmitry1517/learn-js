let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverage(arr) {
	let total = arr.reduce((i, item) => i + item.age, 0);
	return total / arr.length;
}



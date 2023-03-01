function unique(arr) {
	let uniqArr = Array.from(new Set(arr));
	return uniqArr;
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-О'];

console.log(unique(values));


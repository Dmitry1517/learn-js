let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
	return arr.slice().sort();
}

let arrSorted = copySorted(arr);
console.log(arr);
console.log(arrSorted);


function unique(arr) {
	let resultArr = [];
	for (let item of arr) {
		if (!resultArr.includes(item)) resultArr.push(item);
	}
	return resultArr;
}

let string = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-О'];

console.log(unique(string));

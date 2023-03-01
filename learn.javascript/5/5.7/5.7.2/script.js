let arr = ['nap', 'teachers', 'cheaters', 'Pan', 'ear', 'era', 'hectares'];

function aclean(arr) {
	let map = new Map();
	for (let item of arr) {
		let itemWord = item
		.toLowerCase()
		.split('')
		.sort()
		.join('');
		map.set(itemWord, item);
	}
	let acleanArr = Array.from(map.values());
	return acleanArr;
}

console.log(aclean(arr));


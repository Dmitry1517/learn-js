function randomInteger(min, max) {
	let randNum = Math.round(min - 0.5 + Math.random() * (max - min +1)) ;
	return randNum;
}

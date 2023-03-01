function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	let result = date.getDate();
	return result;
}

console.log(getLastDayOfMonth(2023, 2));
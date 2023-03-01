function getDateAgo(date, days) {
	let newDate = new Date(date);
	newDate.setDate(date.getDate() - days);
	return newDate.getDate();
}

let date = new Date(2023, 1, 25);


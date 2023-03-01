function getWeekDay(date) {
	return date.getDay() > 0 ? date.getDay() : 7;
}

let date = new Date(2023, 1, 27);


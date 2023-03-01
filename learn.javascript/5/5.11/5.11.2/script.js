function getWeekDay(date) {
	let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	return weekDays[date.getDay()];
}

let date = new Date(2023, 1, 25);
console.log(getWeekDay(date));
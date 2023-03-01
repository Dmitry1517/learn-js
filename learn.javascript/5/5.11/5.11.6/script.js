function getSecondsToday() {
	let seconds = new Date();
	let resultSec = seconds.getHours() * 3600 + seconds.getMinutes() * 60 + seconds.getSeconds();
	return resultSec;
}

console.log(getSecondsToday());
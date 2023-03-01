function getSecondsToTomorrow() {
	let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  let result = Math.round((tomorrow - today) / 1000); 
	return result;
}

console.log(getSecondsToTomorrow());
let arr = [1, 2, 3];
function FirstFunction() {
	return arr;
}

function SecondFunction() {
	return arr;
}

let first = new FirstFunction();
let second = new SecondFunction();

alert(first == second); // true, да, возможно
let salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
}

function topSalary(salaries) {
	let maxSalary = 0;
	let userSalary = null;
	for (let [name, sal] of Object.entries(salaries)) {
		if (maxSalary < sal) {
			maxSalary = sal;
			userSalary = name;
		}
	}
	return userSalary;
}
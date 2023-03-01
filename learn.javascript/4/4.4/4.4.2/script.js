let calculator = {
	read() {
		this.a = +prompt('Введите число а');
		this.b = +prompt('Введите число b');
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	}
}


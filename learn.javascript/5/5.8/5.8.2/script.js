let messeges = [
	{text: 'Hello', from: 'John'},
	{text: 'How goes?', from: 'John'},
	{text: 'See you soon', from: 'Alice'}
]

let read = new WeakMap();

read.set(messeges[0], new Date(2023, 1, 21));

console.log(read);


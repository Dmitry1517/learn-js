let messeges = [
	{text: 'Hello', from: 'John'},
	{text: 'How goes?', from: 'John'},
	{text: 'See you soon', from: 'Alice'}
]

let read = new WeakSet();

read.add(messeges[0]); 

if (read.has(messeges[0])) {
	messeges.shift(messeges[0]);
}
console.log(read);
console.log(messeges);

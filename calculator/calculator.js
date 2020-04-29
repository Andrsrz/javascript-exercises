function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numbers) {
	let total = 0;
	for (let number of numbers){
		total += number;
	}
	return total;
}

function multiply () {

}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}

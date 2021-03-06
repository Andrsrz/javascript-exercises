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

function multiply (numbers) {
	let total = 1;
	for (let number of numbers){
		total *= number;
	}
	return total;
}

function power(base, exponent) {
	let power = 1;
	for(let i = 0; i < exponent; i++){
		power *= base;
	}
	return power;
}

function factorial(number) {
	let factorial = 1;

	if (number == 0 || number == 1)
		return factorial;

	for(let i = number; i > 1; i--){
		factorial *= i;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}

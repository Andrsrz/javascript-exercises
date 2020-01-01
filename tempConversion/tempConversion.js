const ftoc = function() {
	// Avoid magic numbers
	const FIVE = 5;
	const NINE = 9;
	const TEN = 10;
	const THIRTY_TWO = 32;
	let celsius = 0;

	celsius = Math.round( ( (arguments[0] - THIRTY_TWO) * (FIVE / NINE) ) * TEN ) / TEN;

	return celsius;
}

const ctof = function() {
	// Avoid magic numbers
	const FIVE = 5;
	const NINE = 9;
	const TEN = 10;
	const THIRTY_TWO = 32;
	let fahrenheit = 0;

	fahrenheit = Math.round( ( arguments[0] * (NINE / FIVE) + THIRTY_TWO ) * TEN ) / TEN;

	return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}

const leapYears = function() {
	// Avoid magic numbers
	const FOUR = 4;
	const HUNDRED = 100;
	const FOUR_HUNDRED = 400;
	let leapYear = false;

	if(arguments[0] % FOUR == 0){
		leapYear = true;
		if(arguments[0] % HUNDRED == 0){
			leapYear = false;
			if(arguments[0] % FOUR_HUNDRED == 0){
				leapYear = true;
			}
		}
	}

	return leapYear;
}

module.exports = leapYears

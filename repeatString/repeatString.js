const repeatString = function(str, number) {
	myStr = '';

	if(number != -1) {
		for(let i = 0; i < number; i++) {
			myStr += str;
		}
	}else {
		myStr = 'ERROR';
	}

	return myStr;
}

module.exports = repeatString

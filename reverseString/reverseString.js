const reverseString = function(str) {
	let myStr = '';
	let strSize = str.length - 1;

	for(let i = strSize; i >= 0; i--) {
		myStr += str[i];
	}

	return myStr;
}

module.exports = reverseString

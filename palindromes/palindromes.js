const palindromes = function(phrase) {
	let reversedPhrase = '';

	for (let i = phrase.length - 1; i >= 0; i--){
		reversedPhrase += phrase[i];
	}

	return phrase == reversedPhrase;
}

module.exports = palindromes

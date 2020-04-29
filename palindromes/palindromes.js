const palindromes = function(phrase) {
	let reversedPhrase = '';
	let phraseWithoutPunctuation = '';
	phrase = phrase.toLowerCase();
	let punctuation = ['!',',','.',' '];

	/* CREATE NEW STRING WITHOUT PUNCTUATION */
	for(let i = 0; i < phrase.length; i++){
		if(punctuation.includes(phrase[i]))
			continue;
		phraseWithoutPunctuation += phrase[i];
	}

	for(let i = phraseWithoutPunctuation.length - 1; i >= 0; i--){
		reversedPhrase += phraseWithoutPunctuation[i];
	}

	return phraseWithoutPunctuation == reversedPhrase;
}

module.exports = palindromes

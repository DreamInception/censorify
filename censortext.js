function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWord(word) {
	customCensoredWords.push(word);
}
function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
}
export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;
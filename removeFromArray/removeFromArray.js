const removeFromArray = function() {
	let myArr = arguments[0];
	let myArrSize = myArr.length;
	let argCount = arguments.length;

	for(let i = 1; i <= argCount; i++) {
		for(let j = 0; j < myArrSize; j++){
			if(myArr[j] == arguments[i]) {
				myArr.splice(j, 1);
			}
		}
	}
	
	return myArr;
}

module.exports = removeFromArray

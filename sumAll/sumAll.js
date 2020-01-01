const sumAll = function() {
	const ERROR = 'ERROR';
	const NUMBER = 'number';
	let sum = 0;

	if( ( typeof arguments[0] != NUMBER ) || ( typeof arguments[1] != NUMBER ) ){
		return ERROR;
	}else if( ( arguments[0] < 0 ) || ( arguments[1] < 0 ) ){
		return ERROR;
	}

	if( arguments[0] > arguments[1] ){
		for(let i = arguments[1]; i <= arguments[0]; i++ ){
			sum += i;
		}
	}else{
		for(let i = arguments[0]; i <= arguments[1]; i++ ){
			sum += i;
		}
	}

	return sum;
}

module.exports = sumAll

function min(a, b) {
	return a < b ? a : b;
}

function max(a, b) {
	return a > b ? a : b;
}

function digit(a) {
	let num = 0;
	while(a) {
		a = Math.floor(a/10);
		num++;
	}
	if(num == 0) num = 1;
	return num;
}
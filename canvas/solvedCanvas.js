async function drawSolvedCanvas(solvedData) {
	const solvedCanvas = new Canvas("solvedCanvas", 300, 150);
	solvedCanvas.setBorderRadius("5px");
	//solvedCanvas.setBackgroundColor("#17CE3A");

	solvedCanvas.putImage(15, 13, 40, 50, solvedData.imgUrl)

	solvedCanvas.putText(65, 22, solvedData.user_id);
	solvedCanvas.putLine(65, 33, 200, 33, "#ffffff", 1);
	solvedCanvas.putText(65, 42, "Level: " + solvedData.level, "13px verdana, sans-serif")
	solvedCanvas.putText(65, 55, solvedLv[solvedData.level], "bold 15px verdata, sans-serif")
  
	solvedCanvas.putText(223, 24, "AC Rating", "12px verdana, sans-serif", "#eeeeee");
	solvedCanvas.putText(getXOfRating(solvedData.rating), 48, solvedData.rating, "bold 28px Arial ", solvedColorTable[solvedData.level]);

	//solvedCanvas.setBgLinearGradient(0, 0, 300, 150, 0, 0, 300, 150, "#DDCEDD", "#17CE3A", "#DDCEDD");
	solvedCanvas.setBgParticleGradient(5, 10);
	solvedCanvas.putParticles(5, solvedColorTable);
	
	const requiredRating = await getRequiredRating(solvedData);
	console.log(requiredRating);
	const mx = await getRatingLength(280 - 15, requiredRating, solvedRating[solvedData.level]);
	solvedCanvas.render();
}

function getRequiredRating(solvedData) {
	let nextRating;
	let lv = solvedData.level;
	if (lv === 31) return 0;
	else nextRating = solvedRating[lv + 1];

	return nextRating - solvedData.rating;
}

function getRatingLength(length, requiredRating, nextRating) {
	return length - (requiredRating / nextRating) * length;
}

function getXOfRating(currentRating) {
	let digit_num = digit(currentRating);
	console.log("digit_num: ", digit_num);
	if(digit_num == 1) {
		return 245;
	}
	else if(digit_num == 2) {
		return 238;
	}
	else if(digit_num == 3) {
		return 230;
	}
	return 222;
}
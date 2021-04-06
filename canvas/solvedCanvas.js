async function drawSolvedCanvas(solvedData) {
	const solvedCanvas = new Canvas("solvedCanvas", 300, 150);
	solvedCanvas.setBorderRadius("5px");
	solvedCanvas.setBackgroundColor("#17CE3A");

	solvedCanvas.putImage(15, 13, 40, 50, solvedData.imgUrl)

	solvedCanvas.putText(65, 22, solvedData.user_id);
    solvedCanvas.putLine(65, 33, 200, 33, "#ffffff", 1);
    solvedCanvas.putText(65, 42, "Level: " + solvedData.level, "13px verdana, sans-serif")
	solvedCanvas.putText(65, 55, solvedLv[solvedData.level-1], "bold 15px verdata, sans-serif")
  
	solvedCanvas.putText(223, 24, "AC Rating", "12px verdana, sans-serif", "#eeeeee");
    solvedCanvas.putText(220, 48, solvedData.rating, "bold 28px Arial ", solvedColorTable[solvedData.level-1]);

	const requiredRating = await getRequiredRating(solvedData);
	console.log(requiredRating);
	const mx = await getRatingLength(280 - 15, requiredRating, solvedRating[solvedData.level]);
	solvedCanvas.render();
	//solvedCanvas.putLoadingBar(15, 80, mx, 80, 280, 80, color1="#ffffff", color2="#000000", bgColor ="#444444", lineWidth = 10);
}

async function getRequiredRating(solvedData) {
	let nextRating;
	let lv = solvedData.level;
	if (lv === 31) return 0;
	else nextRating = solvedRating[lv];

	return nextRating - solvedData.rating;
}

async function getRatingLength(length, requiredRating, nextRating) {
	return length - (requiredRating / nextRating) * length;
}

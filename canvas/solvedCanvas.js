class SolvedCanvas extends Canvas {
	constructor(id, width, height) {
		super(id, width, height);
		this.time = 0;
	}
	putLoadingBar(sx, sy, mx, my, ex, ey, color1="#000000", color2="#ffffff", bgColor ="#444444", lineWidth = 1) {
		console.log(sx, mx, ex, lineWidth);
		this.putLine(sx, sy, ex, ey, bgColor, 10);
		this.RenderLoadingBar(sx, sy, mx, my, color1, color2, lineWidth);		
	}

	RenderLoadingBar = (sx, sy, ex, ey, color1, color2, lineWidth) => {
		this.ctx.clearRect(sx, sy, ex, ey + lineWidth);
		let length = Math.floor ((ex - sx) / 20);
		this.time = (this.time + 1) % length;

		for(let i = 0; i <= 10; i++) {
			let tempX = this.time + sx + 2 * i * length;
			console.log(tempX , tempX + length);
			this.putLine(tempX, sy, min(ex, tempX + length), ey, color1, lineWidth);
			this.putLine(max(sx, tempX - length), sy, tempX, ey, color2, lineWidth);
		}
	}
}

async function drawSolvedCanvas(solvedData) {
	const solvedCanvas = new SolvedCanvas("solvedCanvas", 300, 150);
	solvedCanvas.setBorderRadius("5px");
	solvedCanvas.setBackgroundColor("#2c2c2c");

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

	solvedCanvas.putLoadingBar(15, 80, mx, 80, 280, 80, color1="#ffffff", color2="#000000", bgColor ="#444444", lineWidth = 10);
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

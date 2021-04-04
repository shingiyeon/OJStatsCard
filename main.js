const solvedHandle = "nuclear852";
const BOJHandle = "nuclear852";


async function main() {
	const solvedData = await solvedAnalyzer(myHandle);
	if(solvedData !== null) {
		const solvedCanvas = new Canvas("solvedCanvas", 300, 150);
		solvedCanvas.setBorderRadius("5px");
		solvedCanvas.setBackgroundColor("#2c2c2c");
		console.log(solvedData)
		solvedCanvas.putImage(25, 25, 40, 50, solvedData.imgUrl)

		solvedCanvas.putText(80, 35, solvedData.user_id);
		solvedCanvas.putLine(80, 47, 240, 47, "#ffffff", 1);
		solvedCanvas.putText(80, 50, solvedData.)
	}	
}

main();





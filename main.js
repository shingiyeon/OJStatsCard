const solvedHandle = "dodo8";
const BOJHandle = "nuclear852";

async function main() {
	const solvedData = await solvedAnalyzer(solvedHandle);
	if(solvedData !== null) {
		await drawSolvedCanvas(solvedData);
	}	
}

main();





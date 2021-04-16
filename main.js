const solvedHandle = "nuclear852";
const BOJHandle = "nuclear852"; 
const cofoHandle = "GodGiYeon";

async function main() {
	const solvedData = await solvedAnalyzer(solvedHandle);
	if(solvedData !== null) {
		await drawSolvedCanvas(solvedData);
	}	
	const cofoData = await cofoAnalyzer(cofoHandle);
	console.log(cofoData);

	const BOJData = await BOJFetcher(BOJHandle);
	console.log(BOJData);
}

main();





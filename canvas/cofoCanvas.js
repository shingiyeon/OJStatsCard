async function drawCofoCanvas(cofoData) {
    const lv = getLevel(cofoData.rating);
    const maxLv = getLevel(cofoData.maxRating);

    const cofoCanvas = new Canvas("cofoCanvas", 300, 150);
    cofoCanvas.setBorderRadius("5px");

    cofoCanvas.setBgParticleGradient(150, 300);
    cofoCanvas.putParticles(6, cofoBgColor);
    cofoCanvas.putRoundRect(15, 20, 27, 47, 3, cofoColorTable[lv]);
    if(lv !== 9) {
        cofoCanvas.putRoundRect(30, 14, 42, 47, 3, cofoColorTable[lv]);
        cofoCanvas.putRoundRect(45, 23, 57, 47, 3, cofoColorTable[lv]);
    }
    else {
        cofoCanvas.putRoundRect(30, 14, 42, 47, 3, cofoColorTable[lv - 1]);
        cofoCanvas.putRoundRect(45, 23, 57, 47, 3, cofoColorTable[lv - 1]);
    }
    cofoCanvas.putText(65, 22, cofoData.handle, "bold 15px verdana, sans-serif", fontStyle = "white");
	cofoCanvas.putLine(65, 33, 200, 33, "#ffffff", 1);
    cofoCanvas.putText(65, 43, cofoLv[lv], "bold 10px verdana, sans-serif");



    cofoCanvas.render();
}

function getLevel(rating) {
    let lv = -1;
    for(let i in cofoRating) {
        if (rating >= cofoRating[i]) {
            lv += 1;
        }
    }
    return lv;
}

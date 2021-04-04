const body = document.body;

class Canvas {
	constructor(id, width, height) {
		this.canvas = document.createElement("canvas");
		this.canvas.id = id;
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.position = "absolute";

		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext("2d");
		console.log(this.ctx);
	}

	setBorder(border) {
		this.canvas.style.border = border;
	}

	setBorderRadius(borderRadius) {
		this.canvas.style.borderRadius = borderRadius;
	}

	setBackgroundColor(backgroundColor) {
		this.canvas.style.backgroundColor = backgroundColor;
	}

	putImage(x, y, width, height, imageSrc) {	
		var img = new Image();
		img.onload = () => {
			this.ctx.drawImage(img, x, y, width, height);
		}
		img.src = imageSrc;
	}

	putLine(sx, sy, ex, ey, strokeStyle = "#ffffff", lineWidth = 1) {
		this.ctx.beginPath();
		this.ctx.moveTo(sx, sy);
		this.ctx.lineTo(ex, ey);
		this.ctx.lineWidth = lineWidth;
		this.ctx.strokeStyle = strokeStyle;
		this.ctx.stroke();
	}

	putText(x, y, text = "TEMP", font = "bold 15px verdana, sans-serif",
	fontStyle = "#ffffff", textBaseline = "middle") {
		this.ctx.font = font;
		this.ctx.fillStyle = fontStyle;
		this.ctx.textBaseline = textBaseline;
		this.ctx.fillText(text, x, y);
	}


};
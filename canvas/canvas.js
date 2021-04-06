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

		this.bgGradient = null;
		this.lines = [];
		this.images = [];
		this.texts = [];
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

	setBackgroundGradient(sx, sy, ex, ey, bsx, bsy, bex, bey, color1, color2, color3) {
		this.bgGradient = new backgroundGradient(this.ctx, sx, sy, ex, ey, bsx, bsy, bex, bey, color1, color2, color3);
	}

	putImage(x, y, width, height, imageSrc) {
		this.images.push(new ImageDrawing(this.ctx, x, y, width, height, imageSrc));
	}

	putLine(sx, sy, ex, ey, strokeStyle = "#ffffff", lineWidth = 1) {
		this.lines.push(new Line(this.ctx, sx, sy, ex, ey, strokeStyle, lineWidth));
	}

	putText(x, y, text = "TEMP", font = "bold 15px verdana, sans-serif",
		fontStyle = "#ffffff", textBaseline = "middle"
	) {
		this.texts.push(new Text(this.ctx, x, y, text, font, fontStyle, textBaseline));
	}

	render() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		if (this.bgGradient !== null) {
			this.bgGradient.draw();
			this.bgGradient.updateMiddleVal();
		}
		this.lines.forEach((line) => {
			line.draw();
		});
		this.images.forEach((image) => {
			image.draw();
		});
		this.texts.forEach((text) => {
			text.draw();
		});

		requestAnimationFrame(() => {this.render();});

	}

};
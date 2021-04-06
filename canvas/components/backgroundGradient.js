class backgroundGradient {
	constructor(ctx, sx, sy, ex, ey,
		bsx, bsy, bex, bey,
		color1, color2, color3) {
		this.ctx = ctx;
		this.sx = sx; this.sy = sy;
		this.ex = ex; this.ey = ey;
		this.bsx = bsx; this.bsy = bsy;
		this.bex = bex; this.bey = bey;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;

		this.middleVal = 0.00;
		this.flag = true;
	}

	draw() {
		let grad = this.ctx.createLinearGradient(this.sx, this.sy, this.ex, this.ey);
		grad.addColorStop(0.0, this.color1);
		grad.addColorStop(this.middleVal, this.color2);
		grad.addColorStop(1.0, this.color3);

		this.ctx.fillStyle = grad;
		this.ctx.fillRect(this.bsx, this.bsy, this.bex, this.bey);
	}

	updateMiddleVal() {
		if(this.flag) {
			this.middleVal += 0.005;
			if(this.middleVal >= 1.0) {
				this.flag = !this.flag;
				this.middleVal = 1.0;
			}
		}
		else {
			this.middleVal -= 0.005;
			if(this.middleVal <= 0.0) {
				this.flag = !this.flag;
				this.middleVal = 0.0;
			}
		}
	}

};
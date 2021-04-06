class Text {
    constructor(ctx, x, y, text = "TEMP",
     font = "bold 15px verdana, sans-serif",
     fontStyle = "#ffffff",
     textBaseline = "middle") {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
        this.fontStyle = fontStyle;
        this.textBaseline = textBaseline;
    }

    draw() {
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fontStyle;
        this.ctx.textBaseline = this.textBaseline;
        this.ctx.fillText(this.text, this.x, this.y);
    }
};
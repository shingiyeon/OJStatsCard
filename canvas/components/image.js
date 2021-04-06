class ImageDrawing {
    constructor(ctx, x, y, width, height, imageSrc) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageSrc = imageSrc;
    }

    draw() {
        var img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        img.src = this.imageSrc;
    }
}
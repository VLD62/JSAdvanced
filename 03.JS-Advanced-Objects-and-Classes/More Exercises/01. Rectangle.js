class Rectangle {
    constructor(width, height, color) {
        this.width = Number(width);
        this.height = Number(height);
        this.color = color;
    }
    calcArea(length) {
        return this.width * this.height;
    }
}

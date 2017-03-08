module.exports = class Figure {
  constructor (shape) {
    this.shape = shape;
  }
  area () {
    return `${ this.shape.width * this.shape.height }${ this.shape.units }^2`;
  }
}

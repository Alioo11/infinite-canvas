class Boundary implements AbstractRectBoundary {
  boundary: AbstractRect;
  constructor(x?: number, y?: number, width?: number, height?: number) {
    if (!x || !y || !width || !height) this.boundary = new Rect(0, 0, 0, 0);
    else this.boundary = new Rect(x, y, width, height);
  }
}

class Viewport implements AbstractViewport {
  nav: AbstractNav;
  renderingContext: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement;
  constructor(
    htmlCanvasElement: HTMLCanvasElement,
    width: number,
    height: number
  ) {
    this.canvasElement = htmlCanvasElement;
    this.renderingContext = htmlCanvasElement.getContext("2d")!;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.nav = new Nav(this.canvasElement, width, height);
  }
  render() {}
}

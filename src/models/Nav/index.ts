class Nav implements AbstractNav {
  readonly view: AbstractRect;
  private width:number;
  private height:number;
  constructor(canvasElement: HTMLCanvasElement, width: number, height: number) {
    this.view = new Rect((width / 2) * -1, (height / 2) * -1, width, height);
    this.registerMouseEvents(canvasElement);
    this.width = width
    this.height = height;
  }

  private registerMouseEvents(canvasElement: HTMLCanvasElement) {
    canvasElement.addEventListener("auxclick", (event) => {});
  }
}

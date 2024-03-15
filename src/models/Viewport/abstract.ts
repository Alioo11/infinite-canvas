
abstract class AbstractViewport {
  abstract nav: AbstractNav;
  abstract render: () => void; // TODO need infinite canvas model implementation
  abstract renderingContext: CanvasRenderingContext2D;
  abstract canvasElement: HTMLCanvasElement;
}
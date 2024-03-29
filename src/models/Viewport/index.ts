import AbstractLayer from "../Layer/abstract";
import Nav from "../Nav";
import AbstractNav from "../Nav/abstract";
import AbstractRenderableElement from "../Renderable/Element/abstract";
import AbstractViewport from "./abstract";

class Viewport implements AbstractViewport {
  nav: AbstractNav;
  renderingContext: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement;
  width: number;
  height: number;
  constructor(
    htmlCanvasElement: HTMLCanvasElement,
    width: number,
    height: number
  ) {
    this.canvasElement = htmlCanvasElement;
    this.renderingContext = htmlCanvasElement.getContext("2d")!;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.width = width;
    this.height = height;
    this.nav = new Nav(this.canvasElement, width, height);
  }

  render(layers: Array<AbstractLayer>, timeStamp: number) {
    this.renderingContext.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < layers.length; i++) {
      for (let j = 0; j < layers[i].elements.length; j++) {
        const element = layers[i].elements[j];
        element.update(timeStamp);
        if (element instanceof AbstractRenderableElement) {
          if (element.isInView(this.nav.view)) element.render(this);
        } else {
          element.render(this);
        }
      }
    }
  }
}

export default Viewport;

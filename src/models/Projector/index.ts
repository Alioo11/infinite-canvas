import Coordinate from "../Coordinate";
import AbstractRect from "../Rect/abstract";
import AbstractViewport from "../Viewport/abstract";
import abstractViewportBox from "../viewportBox/abstract";
import AbstractProjector from "./abstract";

class Projector implements AbstractProjector {
  viewport: abstractViewportBox;
  constructor(viewport: abstractViewportBox) {
    this.viewport = viewport;
  }

  projectCoordinate(x: number, y: number) {
    return new Coordinate(
      (x - this.viewport.viewRect.x) / this.viewport.scale,
      (y - this.viewport.viewRect.y) / this.viewport.scale
    );
  }

  projectX(x: number) {
    return x - this.viewport.viewRect.x;
  }

  projectY(y: number) {
    return y - this.viewport.viewRect.y;
  }

}


export default Projector;
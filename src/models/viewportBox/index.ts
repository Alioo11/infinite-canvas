import AbstractRect from "../Rect/abstract";
import abstractViewportBox from "./abstract";

class ViewportBox implements abstractViewportBox {
  viewRect: AbstractRect;
  private width:number;
  constructor(initialViewRect: AbstractRect, width: number) {
    this.viewRect = initialViewRect;
    this.width = width;
  }

  get scale() {
    return this.viewRect.width / this.width;
  }
}

export default ViewportBox;
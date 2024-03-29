import RectUtils from "../../helpers/rect";
import Coordinate from "../Coordinate";
import Rect from "../Rect";
import AbstractNav from "./abstract";
import abstractViewportBox from "../viewportBox/abstract";
import ViewportBox from "../viewportBox";
import { config } from "../../configs/Nav";

class Nav implements AbstractNav {
  public view: abstractViewportBox;
  private isPanning: boolean = false;
  private panningPerviousCoordinate: Coordinate | null = null;
  constructor(canvasElement: HTMLCanvasElement, width: number, height: number) {
    this.view = new ViewportBox( new Rect((width / 2) * -1, (height / 2) * -1, width, height) , width)
    this.registerMouseEvents(canvasElement);
  }

  private registerMouseEvents(canvasElement: HTMLCanvasElement) {
    canvasElement.addEventListener("wheel", (event) => {
      const zoomPivot = RectUtils.getCenter(this.view.viewRect);
      let scrollAmount = 1 - (Math.abs(Math.atan(event.deltaY)) - 1) * config.zoomFactor;
      if (event.deltaY < 0) scrollAmount = 1 / Math.abs(scrollAmount);
      this.view.viewRect = RectUtils.shrinkRectRelativeToPoint(this.view.viewRect,zoomPivot,scrollAmount);
      
    });

    canvasElement.addEventListener("mousedown", (event) => {
      if (event.button === 1) {
        this.panningPerviousCoordinate = new Coordinate(
          event.clientX,
          event.clientY
        );
        this.isPanning = true;
      }
    });

    canvasElement.addEventListener("mouseup", (event) => {
      if (event.button === 1) {
        this.panningPerviousCoordinate = null;
        this.isPanning = false;
      }
    });

    canvasElement.addEventListener("mousemove", (event) => {
      if (!this.isPanning) return;
      const DX = event.clientX - this.panningPerviousCoordinate!.x;
      const DY = event.clientY - this.panningPerviousCoordinate!.y;

      const newX = this.view.viewRect.x + (DX * config.mouseXFactor) * this.view.scale;
      const newY = this.view.viewRect.y + (DY * config.mouseYFactor) * this.view.scale;

      this.view.viewRect.x = newX;
      this.view.viewRect.y = newY;

      this.panningPerviousCoordinate = new Coordinate(
        event.clientX,
        event.clientY
      );
    });
  }
}

export default Nav;

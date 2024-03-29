import AbstractCoordinate from "../Coordinate/abstract";
import abstractViewportBox from "../viewportBox/abstract";

abstract class AbstractProjector {
  abstract viewport: abstractViewportBox;
  abstract projectCoordinate: (x:number, y:number) => AbstractCoordinate;
}

export default AbstractProjector;
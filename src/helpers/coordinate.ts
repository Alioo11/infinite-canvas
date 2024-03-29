import Coordinate from "../models/Coordinate";
import AbstractCoordinate from "../models/Coordinate/abstract";

class CoordinateUtils {
  static getCoordinatesDiff = (coordA: Coordinate, coordB: Coordinate) => {
    return {
      dx: coordB.x - coordA.x,
      dy: coordB.x - coordA.y,
    };
  };

  static extendThrough = (
    coordA: AbstractCoordinate,
    coordB: AbstractCoordinate,
    fraction: number
  ) => {
    const DX = coordB.x - coordA.x;
    const DY = coordB.y - coordA.y;
    return new Coordinate(coordA.x + DX * fraction, coordA.y + DY * fraction);
  };
}

export default CoordinateUtils;

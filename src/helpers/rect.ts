import Coordinate from "../models/Coordinate";
import AbstractCoordinate from "../models/Coordinate/abstract";
import Rect from "../models/Rect";
import AbstractRect from "../models/Rect/abstract";
import CoordinateUtils from "./coordinate";

class RectUtils {
  /** @description renders center coordinate of a rect */
  static getCenter = (rect: AbstractRect) =>
    new Coordinate(rect.x + rect.width / 2, rect.y + rect.height / 2);

  /** @description checks if two rects are intersecting  */
  static checkRectsOverlap = (rectA: AbstractRect, rectB: AbstractRect) => {
    const hasVerticalOverlap = (rectA.x < rectB.x && rectB.x < rectA.x + rectA.width) || (rectA.x > rectB.x && rectA.x < rectB.x + rectB.width)
    const hasHorizontalOverlap = ( rectA.y < rectB.y && rectB.y < rectA.y + rectA.height) || ( rectA.y > rectB.y && rectA.y < rectB.y + rectB.height)

    return hasVerticalOverlap && hasHorizontalOverlap;
  };

  static getCornersCoordinate = (rect: AbstractRect) => {
    const topLeftCoord = new Coordinate(rect.x, rect.y);
    const topRightCoord = new Coordinate(rect.x + rect.width, rect.y);
    const bottomLeftCoord = new Coordinate(rect.x, rect.y + rect.height);
    const bottomRightCoord = new Coordinate(
      rect.x + rect.width,
      rect.y + rect.height
    );

    return [topLeftCoord, topRightCoord, bottomLeftCoord, bottomRightCoord];
  };

  /** @description returns a new rect according to a point */
  static shrinkRectRelativeToPoint = (
    rect: AbstractRect,
    point: AbstractCoordinate,
    fraction: number
  ) => {
    const [topLeft, topRight, bottomLeft, bottomRight] =
      this.getCornersCoordinate(rect);

    const newTopLeft = CoordinateUtils.extendThrough(point, topLeft, fraction);
    const newTopRight = CoordinateUtils.extendThrough(
      point,
      topRight,
      fraction
    );
    const newBottomLeft = CoordinateUtils.extendThrough(
      point,
      bottomLeft,
      fraction
    );

    const newRectWidth = newTopRight.x - newTopLeft.x;
    const newRectHeight = newBottomLeft.y - newTopLeft.y;

    return new Rect(newTopLeft.x, newTopLeft.y, newRectWidth, newRectHeight);
  };
}

export default RectUtils;

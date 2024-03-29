import AbstractCoordinate from "./abstract";

class Coordinate implements AbstractCoordinate {
  constructor(public x: number, public y: number) {}
}

export default Coordinate;
import AbstractRect from "./abstract";

class Rect implements AbstractRect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  get asString (){
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }
}

export default Rect;
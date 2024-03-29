import AbstractRenderable from "../Renderable/abstract";

abstract class AbstractLayer {
  abstract index: number;
  abstract elements: Array<AbstractRenderable>;
}

export default AbstractLayer
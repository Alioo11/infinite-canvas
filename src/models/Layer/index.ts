import AbstractRenderable from "../Renderable/abstract";
import AbstractLayer from "./abstract";

class Layer implements AbstractLayer {
  constructor(public elements:AbstractRenderable[], public index:number){}
}

export default Layer
import AbstractViewport from "../Viewport/abstract";
import abstractViewportBox from "../viewportBox/abstract";

abstract class AbstractRenderable {
  abstract render: (view: AbstractViewport) => void;
  abstract update: (timestamp:number) => void;
}

export default AbstractRenderable;
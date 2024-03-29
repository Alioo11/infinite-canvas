import AbstractLayer from "../Layer/abstract";
import AbstractViewport from "../Viewport/abstract";

abstract class AbstractInfiniteCanvas {
  abstract viewport: AbstractViewport;
  abstract layers: Array<AbstractLayer>;
  abstract start: () => void;
  abstract startRendering: (timeStamp:number) => void;
  // abstract createElement: (data: any) => AbstractRenderable;
  //   abstract selector: (data:any) => AbstractRenderable;
  //   abstract modifier: (data:any) => AbstractRenderable;
}

export default AbstractInfiniteCanvas;
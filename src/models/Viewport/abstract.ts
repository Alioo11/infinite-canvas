import AbstractLayer from "../Layer/abstract";
import AbstractNav from "../Nav/abstract";

abstract class AbstractViewport {
  abstract nav: AbstractNav;
  abstract render: (layers:Array<AbstractLayer>, timestamp:number) => void; 
  abstract renderingContext: CanvasRenderingContext2D;
  abstract canvasElement: HTMLCanvasElement;
  abstract width: number;
  abstract height:number
}

export default AbstractViewport;
import Layer from "../Layer";
import AbstractLayer from "../Layer/abstract";
import GridRenderable from "../Renderable/Grid";
import StatusMonitor from "../Renderable/StatusMonitor";
import Viewport from "../Viewport";
import AbstractViewport from "../Viewport/abstract";
import AbstractInfiniteCanvas from "./abstract";

class InfiniteCanvas implements AbstractInfiniteCanvas {
  layers: AbstractLayer[] = [];
  viewport: AbstractViewport;
  constructor(canvasElement: HTMLCanvasElement, width: number, height: number) {
    this.viewport = new Viewport(canvasElement, width, height);
  }

  async start() {
    const grid = new GridRenderable();
    const statusMonitor = new StatusMonitor();
    const baseLayer = new Layer([grid, statusMonitor], 1);
    this.layers.push(baseLayer);
    this.startRendering(new Date().getTime());
  }

  startRendering = (timestamp: number) => {
    this.viewport.render(this.layers, timestamp);
    requestAnimationFrame(this.startRendering);
  };
}

export default InfiniteCanvas;

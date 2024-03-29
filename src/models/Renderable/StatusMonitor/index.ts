import AbstractViewport from "../../Viewport/abstract";
import AbstractRenderable from "../abstract";

class StatusMonitor implements AbstractRenderable {
  private latestTimestamp: number = new Date().getTime();
  private deltaTimeStamp: number = 30;
  update = (timestamp: number) => {
    this.deltaTimeStamp = timestamp - this.latestTimestamp;
    this.latestTimestamp = timestamp
  };
  render = (view: AbstractViewport) => {
    view.renderingContext.save();
    view.renderingContext.font = "20px Arial";
    const FramesPerSecond = (1000 / this.deltaTimeStamp).toFixed();
    view.renderingContext.fillStyle = "black";
    view.renderingContext.fillRect(0, 0, 90, 30);
    view.renderingContext.fillStyle = "red";
    view.renderingContext.fillText(`${FramesPerSecond} FPS`, 10, 20);
    view.renderingContext.restore();
  };
}

export default StatusMonitor
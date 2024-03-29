import GridRenderableUtils from "../../../helpers/GridRenderable";
import generateSnappedRange from "../../../utils/snappedRangeValues";
import Projector from "../../Projector";
import Rect from "../../Rect";
import AbstractViewport from "../../Viewport/abstract";
import AbstractRenderable from "../abstract";

class GridRenderable implements AbstractRenderable {
  public active: boolean = false;

  private renderMainAxis = (viewport: AbstractViewport) => {
    const projector = new Projector(viewport.nav.view);
    viewport.renderingContext.save();
    const canvasCenterCoord = projector.projectCoordinate(0, 0);
    viewport.renderingContext.lineWidth = 2;
    viewport.renderingContext.strokeStyle = "grey"
    viewport.renderingContext.beginPath();
    viewport.renderingContext.moveTo(canvasCenterCoord.x, 0);
    viewport.renderingContext.lineTo(canvasCenterCoord.x, viewport.height);
    viewport.renderingContext.moveTo(0, canvasCenterCoord.y);
    viewport.renderingContext.lineTo(viewport.width, canvasCenterCoord.y);
    viewport.renderingContext.stroke();
    viewport.renderingContext.restore();
  };

  private renderSecondaryAxisLines = (viewport: AbstractViewport) => {
    const nav = viewport.nav.view;
    const projector = new Projector(viewport.nav.view);
    const gridProjectionUnit = GridRenderableUtils.getSnapValues(viewport.nav.view.viewRect.width);
    if(gridProjectionUnit === null) return
    const verticalLines = generateSnappedRange(nav.viewRect.x, nav.viewRect.x + nav.viewRect.width, gridProjectionUnit!);
    const horizontalLines = generateSnappedRange(nav.viewRect.y, nav.viewRect.y + nav.viewRect.height, gridProjectionUnit!);
    const projectedVerticalLines = verticalLines.map((lineXCoord) => projector.projectX(lineXCoord));
    const projectedHorizontalLines = horizontalLines.map((lineYCoord) => projector.projectY(lineYCoord));

    viewport.renderingContext.save();
    viewport.renderingContext.beginPath();
    viewport.renderingContext.strokeStyle = "#DDDDDD"
    viewport.renderingContext.lineWidth = .5

    for (let i = 0; i < projectedVerticalLines.length; i++) {
      viewport.renderingContext.moveTo(projectedVerticalLines[i] / viewport.nav.view.scale , 0);
      viewport.renderingContext.lineTo(projectedVerticalLines[i] / viewport.nav.view.scale , viewport.height);
    }

    for (let i = 0; i < projectedHorizontalLines.length; i++) {
      viewport.renderingContext.moveTo(0, projectedHorizontalLines[i] / viewport.nav.view.scale);
      viewport.renderingContext.lineTo(viewport.width, projectedHorizontalLines[i] / viewport.nav.view.scale);
    }

    viewport.renderingContext.stroke();
    viewport.renderingContext.restore();

  };

  update= (timestamp: number) => {}

  render(viewport: AbstractViewport) {
    this.renderMainAxis(viewport);
    this.renderSecondaryAxisLines(viewport);
  }

  boundary = new Rect(0, 0, 0, 0);

  /** @description grid is always in view since it gets calculate related to position of `Viewport`    */
  isInView() {
    return true;
  }
}

export default GridRenderable;

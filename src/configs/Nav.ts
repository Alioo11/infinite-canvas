const PANNING_FACTOR = 1;
const ZOOM_FACTOR = 0.3;

const INVERT_MOUSE_X = false;
const INVERT_MOUSE_Y = false;

const MIN_ZOOM = 100;
const MAX_ZOOM = 100;
const VIEWPORT_BOUNDARY_SIZE = 10000;

const _mouseXFactor = (INVERT_MOUSE_X ? 1 : -1) * PANNING_FACTOR;
const _mouseYFactor = (INVERT_MOUSE_Y ? 1 : -1) * PANNING_FACTOR;

const config = {
  panningFactor: PANNING_FACTOR,
  zoomFactor: ZOOM_FACTOR,
  mouseXFactor: _mouseXFactor,
  mouseYFactor: _mouseYFactor,
  minZoom: MIN_ZOOM,
  maxZoom: MAX_ZOOM,
  viewportBoundarySize: VIEWPORT_BOUNDARY_SIZE,
};

export { config };

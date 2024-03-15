abstract class AbstractRenderable {
  abstract render: (view: AbstractViewport) => void;
  abstract boundary: AbstractRect;
  abstract isInView: (view: AbstractViewport) => boolean;
}

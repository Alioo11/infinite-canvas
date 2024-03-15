abstract class AbstractSVGElement extends AbstractRenderable {
  abstract render: (view: AbstractViewport) => void;
  abstract isInView: (view: AbstractViewport) => boolean;
  abstract boundary: AbstractRect;
  abstract ElementType: SVGElementType;
}
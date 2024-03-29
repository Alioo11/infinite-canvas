import abstractViewportBox from "../../viewportBox/abstract";
import AbstractRenderable from "../abstract";

abstract class AbstractRenderableElement extends AbstractRenderable {
    abstract isInView: (view: abstractViewportBox) => boolean;
}

export default AbstractRenderableElement;
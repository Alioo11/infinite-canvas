import AbstractRect from "../Rect/abstract";
import abstractViewportBox from "../viewportBox/abstract";

abstract class AbstractNav {
  abstract readonly view: abstractViewportBox;
}

export default AbstractNav;
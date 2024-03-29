import AbstractRect from "../models/Rect/abstract";

const createSVG = (viewBox: AbstractRect) => {
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("viewBox", viewBox.asString);

  return svgElement;
};


export default createSVG;
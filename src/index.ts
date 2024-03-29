import InfiniteCanvas from "./models/InfiniteCanvas";

const main = () => {
  const body = document.querySelector("body");
  const canvasElement = document.createElement("canvas");
  body?.appendChild(canvasElement);

  canvasElement.style.border = "solid 1px grey";

  const infiniteCnvs = new InfiniteCanvas(canvasElement, 960, 540);

  infiniteCnvs.start();
};
main();

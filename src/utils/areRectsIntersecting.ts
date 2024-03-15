/** @description checks if two rects might intersect */
const areRectsIntersecting = (rectA: Rect, rectB: Rect) => {
  return (
    rectA.x + rectA.width > rectB.x + rectB.width &&
    rectA.y + rectA.height > rectB.y + rectB.height
  );
};

export default areRectsIntersecting;

class GridRenderableUtils {
  static getSnapValues = (viewWidth: number) => {
    if (viewWidth < 5 || viewWidth > 2000) return null;
    if (viewWidth > 5 && viewWidth < 100) return 1;
    if (viewWidth > 100 && viewWidth < 500) return 5;
    if (viewWidth > 500 && viewWidth < 1000) return 10;
    if (viewWidth > 1000 && viewWidth < 2000) return 20;
  };
}


export default GridRenderableUtils;
class GridElement implements AbstractGridElement {
  public active: boolean = false;

  render() {}

  boundary = new Rect(0, 0, 0, 0);

  /** @description grid is always in view since it gets calculate related to position of `Viewport`    */
  isInView() {
    return true;
  }
}
// TODO Draft needs implementation :)
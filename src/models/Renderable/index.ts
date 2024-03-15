class Renderable implements AbstractRenderable {
  render() {}
  isInView() {
    return true;
  }
  boundary = new Rect(0, 0, 0, 0);
}
import Brush from "./Brush";

export default class Eraser extends Brush {
  constructor(canvas) {
    super(canvas);
  }

  draw(x, y) {
    this.ctx.strokeStyle = "white";
    this.ctx.lineTo(x, y);
    this.ctx.lineWidth = 30;
    this.ctx.stroke();
  }
}

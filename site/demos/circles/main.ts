import { renderToCanvas, Circle, Color } from "../../../src/index";

const canvas = document.querySelector("canvas");
if (!canvas) {
  throw new Error("Demo canvas is missing.");
}
renderToCanvas(canvas, new Circle(Color.sanzoWada("blue", "calamine")));

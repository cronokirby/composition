/** Fill the entire canvas with a CSS color, preserving the drawing state. */
export function fillCanvas(canvas: HTMLCanvasElement, color: string): void {
  const context = canvas.getContext('2d');
  if (!context) throw new Error('A 2D canvas context is required.');

  context.save();
  context.resetTransform();
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
}

class Bounds {
  constructor(
    public x0: number,
    public x1: number,
    public y0: number,
    public y1: number,
  ) {}

  width(): number {
    return this.x1 - this.x0;
  }

  height(): number {
    return this.y1 - this.y0;
  }
}

export const SANZO_WADA = {
  blue: {
    cerulean: "#0093A5",
    calamine: "#78CDD0",
  },
};

export class Color {
  constructor(public hex: string) {}

  /** Construct a color referencing the Sanzo Wada palette
   *
   * e.g. `Color.sanzoWada('blue', 'calamine')`.
   */
  static sanzoWada<K extends keyof typeof SANZO_WADA>(
    color: K,
    subColor: keyof (typeof SANZO_WADA)[K],
  ): Color {
    return new Color(SANZO_WADA[color][subColor] as string);
  }
}

export interface Drawing {
  /** Render this drawing to a particular canvas. */
  render(ctx: CanvasRenderingContext2D, bounds: Bounds): void;
}

export class Circle implements Drawing {
  constructor(private color: Color) {}

  render(ctx: CanvasRenderingContext2D, bounds: Bounds): void {
    const midW = bounds.width() / 2;
    const midH = bounds.height() / 2;
    ctx.fillStyle = this.color.hex;
    ctx.arc(midW, midH, Math.min(midW, midH), 0, 2 * Math.PI);
    ctx.fill();
  }
}

/** Render a drawing to a canvas element.
 *
 * Usually, you'll get this canvas by picking it out of the web page.
 */
export function renderToCanvas(
  canvas: HTMLCanvasElement,
  drawing: Drawing,
): void {
  const bounds = new Bounds(0.0, canvas.width, 0.0, canvas.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("failed to get 2d context");
  }
  ctx.save();
  ctx.resetTransform();
  drawing.render(ctx, bounds);
  ctx.restore();
}

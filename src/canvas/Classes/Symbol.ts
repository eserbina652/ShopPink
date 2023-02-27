export class Symbol {
  text: string;
  canvasHeight: number;
  fontSize: number;
  columns: any;
  y: number;
  x: number;
  characters: string;
  constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
    this.characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context: any) {
    //@ts-ignore
    if (context) {
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length)
      );
      //@ts-ignore
      let gradient = context.createRadialGradient(
        //@ts-ignore
        context.canvas.width / 2,
        //@ts-ignore
        context.canvas.height / 2,
        100,
        //@ts-ignore
        context.canvas.width / 2,
        //@ts-ignore
        context.canvas.height / 2,
        //@ts-ignore
        context.canvas.width / 2
      );
      gradient.addColorStop(0, "red");
      gradient.addColorStop(0.5, "cyan");
      gradient.addColorStop(1, "magenta");
      context.fillStyle = gradient;
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
    }

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

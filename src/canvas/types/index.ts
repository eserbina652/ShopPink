export interface ISymbol {
  text: string;
  canvasHeight: number;
  fontSize: number;
  columns: any;
  y: number;
  x: number;
  characters: string;
  draw: (context: any) => void;
}

export interface IAnimate {
  animate: (timeStamp: number) => void;
}

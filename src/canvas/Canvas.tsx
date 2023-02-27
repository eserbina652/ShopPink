import React, { useRef, useEffect, useCallback } from "react";
import { BodyCanvas, Canvas, CanvasPage } from "./styles";
import { IAnimate, ISymbol } from "./types";
import { Effect } from "./Classes/Effect";

let lastTime = 0;
const fps = 40;
const nextFrame = 1000 / fps;
let timer = 0;
const CanvasComponent: React.FC = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  let requestRef = useRef();
  const effect = useRef<any>();
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    if (canvasCtxRef.current) {
      canvasCtxRef.current.canvas.width = window.innerWidth;
      canvasCtxRef.current.canvas.height = window.innerHeight - 130;
    }
  }, [dimensions]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      if (canvasCtxRef.current) {
        effect.current = new Effect(dimensions.width, dimensions.height);
      }
    }
  }, [dimensions]);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (canvasCtxRef.current) {
        canvasCtxRef.current.canvas.width = window.innerWidth;
        canvasCtxRef.current.canvas.height = window.innerHeight;
        effect.current.resize(
          canvasCtxRef.current?.canvas.width,
          canvasCtxRef.current?.canvas.height
        );
      }
    });
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    //@ts-ignore
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const animate = useCallback((timeStamp: IAnimate) => {
    //   @ts-ignore
    const deltaTime = timeStamp - lastTime;
    //@ts-ignore
    lastTime = timeStamp;
    if (timer > nextFrame) {
      if (canvasCtxRef.current && effect.current) {
        canvasCtxRef.current.fillStyle = "rgba(0, 0, 0, 0.05)";
        canvasCtxRef.current.fillRect(
          0,
          0,
          canvasCtxRef.current?.canvas.width,
          canvasCtxRef.current?.canvas.height
        );
        canvasCtxRef.current.font = effect.current.fontSize + "px monospace";
        effect.current.symbols.forEach((symbol: ISymbol) =>
          symbol.draw(canvasCtxRef.current)
        );
      }
      timer = 0;
    } else {
      timer += deltaTime;
    }
    if (requestRef.current !== null) {
      //@ts-ignore
      requestRef.current = requestAnimationFrame(animate);
    }
  }, []);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  return (
    <>
      <CanvasPage>
        <BodyCanvas>
          <Canvas ref={canvasRef} />
        </BodyCanvas>
      </CanvasPage>
    </>
  );
};

export default CanvasComponent;

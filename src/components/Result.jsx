import "./Result.css";
import { img } from "../constants/imgMap.js";
import { useEffect, useRef } from "react";

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });

export default function Result({ currentItems }) {
  const resultRef = useRef(null);

  const drawCanvas = async () => {
    const canvas = resultRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const images = await Promise.all(
      Object.values(currentItems).map((value) => loadImage(img[`${value}`]))
    );

    images.forEach((img) => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    });

    context.drawImage(
      await loadImage(img["watermark"]),
      0,
      0,
      canvas.width,
      canvas.height
    );
  };

  useEffect(() => {
    drawCanvas();
  }, [currentItems]);

  return (
    <div className="assets">
      <canvas
        ref={resultRef}
        width="600px"
        height="750px"
        className="resultCanvas"
      ></canvas>
    </div>
  );
}

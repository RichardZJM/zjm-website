import { Container } from "@mui/material";
import React, { useEffect, useRef, MouseEvent } from "react";

import "./StructuralSolverApp.css";

function StructuralSolverApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 2}px`;

    const context = canvas.getContext("2d");
    context?.scale(4, 4);
    contextRef.current = context;
  }, []);

  const nodeInteract = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    console.log(nativeEvent);
    const { clientX, clientY } = nativeEvent;

    if (!contextRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    console.log(x, y);
    contextRef.current.strokeStyle = "black";
    contextRef.current.fillRect(x - 10, y - 10, 20, 20); // fill in the pixel at (10,10)
  };

  return (
    <Container maxWidth="xl">
      <canvas onMouseDown={nodeInteract} ref={canvasRef}></canvas>
    </Container>
  );
}

export default StructuralSolverApp;

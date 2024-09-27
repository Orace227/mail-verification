import React, { useState, useRef, useEffect } from "react";
import { Container, Grid, Typography, Slider, Button } from "@mui/material";
import CanvasDraw from "react-canvas-draw";

const LogoCanvas = () => {
  const [logoColor, setLogoColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef(null);

  const handleLogoColorChange = (event) => {
    setLogoColor(event.target.value);
  };

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.ctx.drawing;
      context.fillStyle = logoColor;
      context.fillRect(50, 50, 200, 100); // Example logo rectangle
    }
  }, [logoColor]);

  return (
    <Container maxWidth="lg" className="mt-40">
      <Typography variant="h4" align="center">
        Real-Time Logo Maker Canvas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div
            style={{
              backgroundColor: bgColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "600px",
              border: "1px solid black",
            }}
          >
            <CanvasDraw
              ref={canvasRef}
              canvasWidth={800}
              canvasHeight={600}
              hideGrid
              disabled
              style={{ backgroundColor: bgColor }}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Edit Logo</Typography>
          <div style={{ marginBottom: "20px" }}>
            <Typography>Logo Color</Typography>
            <input
              type="color"
              value={logoColor}
              onChange={handleLogoColorChange}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Typography>Background Color</Typography>
            <input
              type="color"
              value={bgColor}
              onChange={handleBgColorChange}
            />
          </div>
          {/* Add more controls here as needed */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => canvasRef.current.clear()}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogoCanvas;

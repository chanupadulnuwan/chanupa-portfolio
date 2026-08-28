import React, { useEffect, useRef } from 'react';

const GhostCursor = ({
  trailLength = 30,
  inertia = 0.37,
  grainIntensity = 0.06,
  bloomStrength = 0.75,
  bloomRadius = 1,
  brightness = 1,
  color = "#FD6F00",
  edgeIntensity = 0
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions to match container or viewport
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth || window.innerWidth;
        canvas.height = parent.clientHeight || window.innerHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Parse color hex to RGB
    const hexToRgb = (hex) => {
      let c = hex.replace('#', '');
      if (c.length === 3) {
        c = c.split('').map(x => x + x).join('');
      }
      const num = parseInt(c, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
      };
    };

    const rgb = hexToRgb(color);

    // Trail points state
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let head = { x: canvas.width / 2, y: canvas.height / 2 };
    const points = [];

    for (let i = 0; i < trailLength; i++) {
      points.push({ x: canvas.width / 2, y: canvas.height / 2, radius: (1 - i / trailLength) * 12 * bloomRadius });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Generate subtle grain overlay buffer
    const grainCanvas = document.createElement('canvas');
    grainCanvas.width = 64;
    grainCanvas.height = 64;
    const grainCtx = grainCanvas.getContext('2d');
    if (grainCtx && grainIntensity > 0) {
      const imgData = grainCtx.createImageData(64, 64);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const val = Math.floor(Math.random() * 255 * grainIntensity);
        imgData.data[i] = val;
        imgData.data[i + 1] = val;
        imgData.data[i + 2] = val;
        imgData.data[i + 3] = val * 0.5;
      }
      grainCtx.putImageData(imgData, 0, 0);
    }

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth inertia movement for head towards target mouse
      head.x += (mouse.x - head.x) * (1 - inertia * 0.85);
      head.y += (mouse.y - head.y) * (1 - inertia * 0.85);

      // Update points trail positions
      points[0].x = head.x;
      points[0].y = head.y;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const pt = points[i];
        pt.x += (prev.x - pt.x) * 0.45;
        pt.y += (prev.y - pt.y) * 0.45;
      }

      // Draw Bloom glow & smooth trail paths
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = points.length - 1; i >= 0; i--) {
        const pt = points[i];
        const progress = 1 - i / points.length;
        const alpha = Math.min(1, progress * bloomStrength * brightness);
        const radius = Math.max(1, pt.radius * (0.8 + progress * 0.6));

        // Radial bloom gradient
        const grad = ctx.createRadialGradient(
          pt.x, pt.y, 0,
          pt.x, pt.y, radius * 3
        );

        grad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Draw smooth connecting path curve
      if (points.length > 2) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.4 * bloomStrength * brightness})`;
        ctx.lineWidth = 4 * bloomRadius;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Render grain overlay pattern if requested
      if (grainIntensity > 0) {
        ctx.fillStyle = ctx.createPattern(grainCanvas, 'repeat');
        ctx.globalAlpha = grainIntensity;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [trailLength, inertia, grainIntensity, bloomStrength, bloomRadius, brightness, color, edgeIntensity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default GhostCursor;

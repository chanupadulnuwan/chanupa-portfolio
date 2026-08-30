import React, { useEffect, useRef } from 'react';

const HeroBackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width * 0.75, y: height * 0.5, targetX: width * 0.75, targetY: height * 0.5 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Floating particles array
    const particleCount = 40;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.15,
        maxAlpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 1. Deep Full Dark Black Base
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle, Minimal Warm Orange Glow Touch on Right Side Only
      const rx = width * 0.82;
      const ry = height * 0.5;
      const gradient = ctx.createRadialGradient(rx, ry, 20, rx, ry, width * 0.42);
      gradient.addColorStop(0, 'rgba(253, 111, 0, 0.075)');
      gradient.addColorStop(0.45, 'rgba(253, 111, 0, 0.02)');
      gradient.addColorStop(1, 'rgba(13, 13, 13, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Subtle Animated Perspective Matrix Lines
      ctx.lineWidth = 1;

      const gridSize = 70;
      const offsetX = (time * 10) % gridSize;
      const offsetY = (time * 6) % gridSize;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      for (let x = offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 4. Floating Energy Particles with Constellation Links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > p.maxAlpha || p.alpha < 0.08) p.pulseSpeed = -p.pulseSpeed;

        const distToRight = Math.abs(p.x - width * 0.8);
        const isRightSide = distToRight < width * 0.35;
        const color = isRightSide
          ? `rgba(253, 111, 0, ${Math.max(0, p.alpha)})`
          : `rgba(255, 255, 255, ${Math.max(0, p.alpha * 0.5)})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.06 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isRightSide
              ? `rgba(253, 111, 0, ${lineAlpha})`
              : `rgba(255, 255, 255, ${lineAlpha * 0.4})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default HeroBackgroundAnimation;

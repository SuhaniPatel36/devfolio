import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const GradientWaves = ({ className = '', height = '100%' }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let heightPx = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      heightPx = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = heightPx / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const getWaveColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const c1 = styles.getPropertyValue('--canvas-wave-1').trim() || '#38bdf8';
      const c2 = styles.getPropertyValue('--canvas-wave-2').trim() || '#2dd4bf';
      const c3 = styles.getPropertyValue('--canvas-wave-3').trim() || '#818cf8';
      return [c1, c2, c3];
    };

    let step = 0;
    const render = () => {
      step += 0.008;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, heightPx);

      const [c1, c2, c3] = getWaveColors();

      const waves = [
        { color: c1, alpha: 0.12, speed: 1.0, freq: 0.002, amp: 45, yOffset: heightPx * 0.55 },
        { color: c2, alpha: 0.10, speed: 1.3, freq: 0.003, amp: 60, yOffset: heightPx * 0.65 },
        { color: c3, alpha: 0.08, speed: 0.7, freq: 0.0018, amp: 50, yOffset: heightPx * 0.75 },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.moveTo(0, heightPx);

        for (let x = 0; x <= width; x += 10) {
          const distToMouse = Math.abs(x - mouseX);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 400) * 20;
          const y =
            w.yOffset +
            Math.sin(x * w.freq + step * w.speed) * (w.amp + mouseInfluence) +
            Math.cos(x * w.freq * 0.5 + step * 0.5) * 15;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, heightPx);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, w.yOffset - w.amp, width, heightPx);
        grad.addColorStop(0, w.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.globalAlpha = w.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default GradientWaves;

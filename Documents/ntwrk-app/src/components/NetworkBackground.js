// src/components/NetworkBackground.js
import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set the background color
      ctx.fillStyle = '#F1EFE7';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the stroke style to a lighter color
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // Lighter color

      const points = [];
      const numPoints = 50;

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw the background color in each frame
        ctx.fillStyle = '#F1EFE7';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'; // Lighter color

        for (let i = 0; i < numPoints; i++) {
          const point = points[i];
          point.x += point.vx;
          point.y += point.vy;

          if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
          if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

          for (let j = i + 1; j < numPoints; j++) {
            const otherPoint = points[j];
            const dx = otherPoint.x - point.x;
            const dy = otherPoint.y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawNetwork();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default NetworkBackground;

// import React, { useEffect, useRef } from 'react';

// const NetworkBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const drawNetwork = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.strokeStyle = 'rgba(0, 0, 0, 0.01)';

//       const points = [];
//       const numPoints = 50;

//       for (let i = 0; i < numPoints; i++) {
//         points.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//         });
//       }

//       const animate = () => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = '#F1EFE7';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < numPoints; i++) {
//           const point = points[i];
//           point.x += point.vx;
//           point.y += point.vy;

//           if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
//           if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

//           for (let j = i + 1; j < numPoints; j++) {
//             const otherPoint = points[j];
//             const dx = otherPoint.x - point.x;
//             const dy = otherPoint.y - point.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < 150) {
//               ctx.beginPath();
//               ctx.moveTo(point.x, point.y);
//               ctx.lineTo(otherPoint.x, otherPoint.y);
//               ctx.stroke();
//             }
//           }
//         }

//         animationFrameId = requestAnimationFrame(animate);
//       };

//       animate();
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();
//     drawNetwork();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
// };

// export default NetworkBackground;
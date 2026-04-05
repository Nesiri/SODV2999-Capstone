// components/CalmBackground.tsx - COMPLETELY SAFE, NO UNDEFINED ERRORS
import React, { useEffect, useRef } from 'react';

interface CalmBackgroundProps {
  opacity?: number;
  className?: string;
}

export const CalmBackground: React.FC<CalmBackgroundProps> = ({ 
  opacity = 0.5, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number | undefined;
    let isMounted = true;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Safely initialize particles
    const particles: Array<{x: number; y: number; radius: number; speed: number; angle: number}> = [];
    const particleCount = 30;
    
    try {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: canvas.width ? Math.random() * canvas.width : window.innerWidth / 2,
          y: canvas.height ? Math.random() * canvas.height : window.innerHeight / 2,
          radius: (Math.random() * 3) + 1,
          speed: 0.002 + (Math.random() * 0.003),
          angle: Math.random() * Math.PI * 2
        });
      }
    } catch (error) {
      console.warn('Error initializing particles:', error);
    }
    
    let time = 0;
    
    const animate = () => {
      // Safety check at start of each frame
      if (!isMounted) return;
      if (!canvas || !ctx) return;
      
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const centerX = canvas.width / 2 || window.innerWidth / 2;
        const centerY = canvas.height / 2 || window.innerHeight / 2;
        
        // Draw soft gradient orbs with safety checks
        if (centerX && centerY) {
          const gradient1 = ctx.createRadialGradient(
            centerX - 100, centerY - 100, 0,
            centerX - 100, centerY - 100, 200
          );
          gradient1.addColorStop(0, 'rgba(147, 51, 234, 0.08)');
          gradient1.addColorStop(1, 'rgba(147, 51, 234, 0)');
          ctx.fillStyle = gradient1;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          const gradient2 = ctx.createRadialGradient(
            centerX + 150, centerY + 100, 0,
            centerX + 150, centerY + 100, 250
          );
          gradient2.addColorStop(0, 'rgba(59, 130, 246, 0.06)');
          gradient2.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.fillStyle = gradient2;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          const gradient3 = ctx.createRadialGradient(
            centerX, centerY + 150, 0,
            centerX, centerY + 150, 180
          );
          gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.04)');
          gradient3.addColorStop(1, 'rgba(236, 72, 153, 0)');
          ctx.fillStyle = gradient3;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        // Draw particles safely
        time += 0.02;
        for (const particle of particles) {
          if (!particle) continue; // Skip if particle is undefined
          
          const offsetX = Math.sin(time * (particle.speed || 0.002) * 10) * 20;
          const offsetY = Math.cos(time * (particle.speed || 0.002) * 8) * 15;
          
          const x = (particle.x || 0) + offsetX;
          const y = (particle.y || 0) + offsetY;
          const radius = particle.radius || 1;
          
          if (x && y && radius) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + (particle.angle || 0)) * 0.05})`;
            ctx.fill();
          }
        }
      } catch (error) {
        console.warn('Animation frame error:', error);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation with a small delay
    const timer = setTimeout(() => {
      if (isMounted) {
        animate();
      }
    }, 100);
    
    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    />
  );
};

export default CalmBackground;
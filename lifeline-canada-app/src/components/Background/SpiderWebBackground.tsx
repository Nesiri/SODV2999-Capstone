// components/SpiderWebBackground.tsx
import React, { useEffect, useRef } from 'react';

interface SpiderWebBackgroundProps {
  opacity?: number;
  className?: string;
}

class Spider {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  angle: number;
  legAngles: number[];
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.size = 8;
    this.speed = 0.02;
    this.angle = 0;
    this.legAngles = [0, 0, 0, 0, 0, 0, 0, 0];
  }
  
  update() {
    this.x += (this.targetX - this.x) * 0.05;
    this.y += (this.targetY - this.y) * 0.05;
    
    this.angle += 0.1;
    for (let i = 0; i < this.legAngles.length; i++) {
      this.legAngles[i] = Math.sin(this.angle + i * 0.8) * 0.5;
    }
  }
  
  setTarget(x: number, y: number) {
    this.targetX = x;
    this.targetY = y;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 1.5;
    
    const legPositions = [
      { angle: -0.8, length: 12 },
      { angle: -0.5, length: 10 },
      { angle: -0.2, length: 9 },
      { angle: 0.1, length: 8 },
      { angle: 0.4, length: 9 },
      { angle: 0.7, length: 10 },
      { angle: 1.0, length: 11 },
      { angle: 1.3, length: 12 }
    ];
    
    for (let i = 0; i < legPositions.length; i++) {
      const leg = legPositions[i];
      const legAngle = leg.angle + this.legAngles[i] * 0.5;
      const endX = this.x + Math.cos(legAngle) * leg.length;
      const endY = this.y + Math.sin(legAngle) * leg.length;
      
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size / 1.5, this.size, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.8)';
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
    ctx.arc(this.x + 2, this.y - 2, 1, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x - 2.3, this.y - 2.3, 0.3, 0, Math.PI * 2);
    ctx.arc(this.x + 1.7, this.y - 2.3, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}

class WebLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  speed: number;
  completed: boolean;
  
  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.progress = 0;
    this.speed = 0.01 + Math.random() * 0.02;
    this.completed = false;
  }
  
  update() {
    if (!this.completed) {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.progress = 1;
        this.completed = true;
      }
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    const currentX = this.x1 + (this.x2 - this.x1) * this.progress;
    const currentY = this.y1 + (this.y2 - this.y1) * this.progress;
    
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + this.progress * 0.3})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export const SpiderWebBackground: React.FC<SpiderWebBackgroundProps> = ({ 
  opacity = 0.7, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const webPoints: { x: number; y: number }[] = [];
    const webLines: WebLine[] = [];
    
    const radialCount = 16;
    const radii = [80, 160, 240, 320, 400];
    
    webPoints.push({ x: centerX, y: centerY });
    
    for (let i = 0; i < radialCount; i++) {
      const angle = (i / radialCount) * Math.PI * 2;
      for (const r of radii) {
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          webPoints.push({ x, y });
        }
      }
    }
    
    for (let i = 1; i < webPoints.length; i++) {
      webLines.push(new WebLine(webPoints[0].x, webPoints[0].y, webPoints[i].x, webPoints[i].y));
    }
    
    for (let ring = 0; ring < radii.length; ring++) {
      const ringStart = 1 + ring * radialCount;
      const ringEnd = ringStart + radialCount;
      for (let i = ringStart; i < ringEnd - 1; i++) {
        webLines.push(new WebLine(webPoints[i].x, webPoints[i].y, webPoints[i + 1].x, webPoints[i + 1].y));
      }
      webLines.push(new WebLine(webPoints[ringEnd - 1].x, webPoints[ringEnd - 1].y, webPoints[ringStart].x, webPoints[ringStart].y));
    }
    
    const spider = new Spider(centerX, centerY);
    let time = 0;
    let pathIndex = 0;
    const pathPoints = webPoints.slice(1);
    
    let animationId: number;
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const line of webLines) {
        line.update();
        line.draw(ctx);
      }
      
      if (pathPoints.length > 0) {
        const targetPoint = pathPoints[pathIndex % pathPoints.length];
        spider.setTarget(targetPoint.x, targetPoint.y);
        
        time += 0.01;
        if (time > 3) {
          pathIndex = (pathIndex + 1) % pathPoints.length;
          time = 0;
        }
      }
      
      spider.update();
      spider.draw(ctx);
      
      ctx.beginPath();
      for (let i = 0; i < radialCount; i++) {
        const angle = (i / radialCount) * Math.PI * 2;
        const endX = centerX + Math.cos(angle) * 450;
        const endY = centerY + Math.sin(angle) * 450;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
      }
      ctx.strokeStyle = 'rgba(200, 180, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      for (const r of radii) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 180, 255, ${0.1 + (r / 500) * 0.1})`;
        ctx.stroke();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
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

export default SpiderWebBackground;
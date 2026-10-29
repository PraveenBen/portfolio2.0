"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Packet {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const initNodes = () => {
      nodes = [];
      packets = [];
      // Subtle node count
      const count = Math.min(Math.floor((width * height) / 32000), 40);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.4 + 1.0,
        });
      }
    };

    initNodes();

    const maybeSpawnPacket = (i: number, j: number) => {
      if (packets.length < 10 && Math.random() < 0.012) {
        packets.push({
          sourceIndex: i,
          targetIndex: j,
          progress: 0,
          speed: Math.random() * 0.01 + 0.006,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Monochromatic connection distance
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Subtle monochromatic line in Color 3 (#A1A1AA)
            const alpha = (1 - dist / maxDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();

            maybeSpawnPacket(i, j);
          }
        }

        // Draw monochromatic node (Color 3: #A1A1AA)
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(161, 161, 170, 0.45)";
        ctx.fill();
      }

      // Draw subtle single-accent packets (#10B981)
      for (let p = packets.length - 1; p >= 0; p--) {
        const packet = packets[p];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const source = nodes[packet.sourceIndex];
        const target = nodes[packet.targetIndex];
        if (!source || !target) {
          packets.splice(p, 1);
          continue;
        }

        const px = source.x + (target.x - source.x) * packet.progress;
        const py = source.y + (target.y - source.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.7)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 mono-grid opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/60 via-transparent to-[#09090B]" />
    </div>
  );
}

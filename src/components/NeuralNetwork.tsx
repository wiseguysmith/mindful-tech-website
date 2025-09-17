"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
}

export default function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const generateNodes = () => {
      const newNodes: Node[] = [];
      const nodeCount = 25;
      
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
            Math.floor(Math.random() * nodeCount)
          ).filter(id => id !== i)
        });
      }
      setNodes(newNodes);
    };

    generateNodes();
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#63F5FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#B95CFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F5D061" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connections */}
        {nodes.map((node) => (
          <g key={`connections-${node.id}`}>
            {node.connections.map((targetId) => {
              const target = nodes.find(n => n.id === targetId);
              if (!target) return null;
              
              return (
                <motion.line
                  key={`${node.id}-${targetId}`}
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="url(#neuralGradient)"
                  strokeWidth="0.1"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: isVisible ? 1 : 0, 
                    opacity: isVisible ? 0.6 : 0 
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </g>
        ))}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="0.3"
            fill="url(#neuralGradient)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isVisible ? 1 : 0, 
              opacity: isVisible ? 0.8 : 0 
            }}
            transition={{ 
              duration: 1, 
              delay: Math.random() * 1.5,
              ease: "easeOut"
            }}
          >
            <animate
              attributeName="r"
              values="0.3;0.5;0.3"
              dur="3s"
              repeatCount="indefinite"
              begin={`${Math.random() * 2}s`}
            />
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}

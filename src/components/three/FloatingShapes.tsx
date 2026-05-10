"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ position, scale, speed, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0.5}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus({ position, scale, speed, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.15;
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6c5ce7" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <AnimatedSphere position={[-4, 2, -2]} scale={1.5} speed={1.2} color="#6c5ce7" />
        <AnimatedSphere position={[4, -1, -3]} scale={1} speed={0.8} color="#fd79a8" />
        <AnimatedSphere position={[0, 3, -4]} scale={0.8} speed={1} color="#a29bfe" />
        <AnimatedTorus position={[-3, -2, -2]} scale={1.2} speed={0.6} color="#6c5ce7" />
        <AnimatedTorus position={[5, 2, -3]} scale={0.9} speed={0.9} color="#fd79a8" />
        <Particles />
      </Canvas>
    </div>
  );
}

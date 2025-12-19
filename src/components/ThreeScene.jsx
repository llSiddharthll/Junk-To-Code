// src/components/ThreeScene.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';

function AbstractShape() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#f00330"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Sparkles count={100} scale={4} size={1} speed={0.3} />
    </Float>
  );
}

function Grid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshBasicMaterial
        color="#333"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Particles() {
  const particles = Array.from({ length: 100 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    size: Math.random() * 0.1 + 0.01,
  }));

  return (
    <group>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#f00330" />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f00330" />
          
          <AbstractShape />
          <Grid />
          <Particles />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      {/* Fallback for non-WebGL */}
      <div className="webgl-fallback absolute inset-0 flex items-center justify-center hidden">
        <div className="text-center">
          <div className="w-64 h-64 border-2 border-accent rounded-full animate-pulse-slow mx-auto" />
        </div>
      </div>
    </div>
  );
}
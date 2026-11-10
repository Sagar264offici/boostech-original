import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* A chrome knot wrapped in a liquid lime ribbon, inside a glass shell.
   Geometry and the reflection environment are generated at runtime —
   no downloaded models, HDR maps or external assets. */

function LiquidRibbon() {
  const geometry = useMemo(() => {
    const points = [];
    const turns = 1.28;
    for (let i = 0; i <= 150; i += 1) {
      const t = i / 150;
      const angle = t * Math.PI * 2 * turns - Math.PI / 2;
      const radius = 1.5 + 0.12 * Math.sin(t * Math.PI * 1.6);
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          (t - 0.5) * 1.7 + 0.18 * Math.cos(angle),
          Math.sin(angle) * radius
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 220, 0.055, 16, false);
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshPhysicalMaterial
        color="#a6e600"
        roughness={0.16}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.08}
        emissive="#557700"
        emissiveIntensity={0.32}
        envMapIntensity={1.1}
      />
    </mesh>
  );
}

function ChromeForms() {
  return (
    <group rotation={[0.1, -0.18, -0.08]}>
      <mesh rotation={[1.18, 0.24, 0.3]}>
        <torusGeometry args={[1.42, 0.2, 96, 220]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.15}
          envMapIntensity={1.65}
        />
      </mesh>
      <mesh position={[0.54, 0.34, 0.62]}>
        <sphereGeometry args={[0.3, 48, 48]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.12}
          envMapIntensity={1.8}
        />
      </mesh>
    </group>
  );
}

function GlassOrb() {
  return (
    <group position={[-1.36, -0.92, 0.95]}>
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#a6e600"
          roughness={0.25}
          metalness={0.1}
          emissive="#5f8c00"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh>
      <sphereGeometry args={[0.62, 56, 56]} />
      <meshPhysicalMaterial
        color="#fbfff2"
        metalness={0}
        roughness={0.02}
        transmission={1}
        thickness={0.9}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={1.15}
        attenuationColor="#c9f24d"
        attenuationDistance={1.3}
        transparent
        opacity={0.95}
      />
      </mesh>
    </group>
  );
}

function OrbitalRings() {
  const ring = useRef(null);
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.08;
  });
  return (
    <group>
      <mesh rotation={[1.22, 0.32, 0.2]}>
        <torusGeometry args={[2.36, 0.007, 8, 160]} />
        <meshBasicMaterial color="#2c302a" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[1.05, -0.45, 1.3]}>
        <torusGeometry args={[2.06, 0.006, 8, 160]} />
        <meshBasicMaterial color="#8aa62c" transparent opacity={0.55} />
      </mesh>
      <group ref={ring} rotation={[0.42, 0.2, 0.9]}>
        <mesh position={[2.36, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#a6e600" />
        </mesh>
      </group>
    </group>
  );
}

function Bob({ children, position, speed = 1, amount = 0.08, rotation = 0.1 }) {
  const group = useRef(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const time = clock.elapsedTime * speed;
    group.current.position.y = position[1] + Math.sin(time) * amount;
    group.current.rotation.x = Math.sin(time * 0.8) * rotation;
    group.current.rotation.y = Math.cos(time * 0.7) * rotation;
  });
  return (
    <group ref={group} position={position}>
      {children}
    </group>
  );
}

function SmallOrbs() {
  return (
    <>
      <Bob position={[1.82, 1.28, 0.5]} speed={1.4} amount={0.1} rotation={0.35}>
        <mesh>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.08}
            envMapIntensity={2}
          />
        </mesh>
      </Bob>
      <Bob position={[1.62, -1.48, 0.7]} speed={1.1} amount={0.12}>
        <mesh>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshPhysicalMaterial
            color="#c9f24d"
            roughness={0.06}
            metalness={0.1}
            clearcoat={1}
            emissive="#7ba117"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Bob>
      <Bob position={[-1.55, 1.55, -0.4]} speed={1.6} amount={0.09} rotation={0.4}>
        <mesh>
          <sphereGeometry args={[0.13, 28, 28]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1.8}
          />
        </mesh>
      </Bob>
    </>
  );
}

/* Builds a studio lighting environment in memory for the chrome and glass. */
function StudioEnvironment() {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const envScene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(1, 1);
    const materials = [];

    const addPanel = (color, intensity, position, rotation, scale) => {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color).multiplyScalar(intensity),
        side: THREE.DoubleSide,
      });
      materials.push(material);
      const panel = new THREE.Mesh(geometry, material);
      panel.position.set(...position);
      if (rotation) panel.rotation.set(...rotation);
      panel.scale.set(...scale);
      envScene.add(panel);
    };

    const backdrop = new THREE.Mesh(
      new THREE.SphereGeometry(30, 24, 24),
      new THREE.MeshBasicMaterial({ color: "#cfd3c6", side: THREE.BackSide })
    );
    envScene.add(backdrop);

    addPanel("#f4ffd8", 3.2, [-7, 1, 2], [0, Math.PI / 2, 0], [8, 8, 1]);
    addPanel("#ffffff", 2.2, [7, 1, 3], [0, -Math.PI / 2, 0], [7, 5, 1]);
    addPanel("#ffffff", 3.4, [0, 5, -9], [0, 0, 0], [7, 4, 1]);
    addPanel("#c9f24d", 2.8, [0, -6, 2], [Math.PI / 2, 0, 0], [7, 4, 1]);
    addPanel("#3d4238", 1, [0, 9, 0], [Math.PI / 2, 0, 0], [14, 14, 1]);
    addPanel("#5b6155", 1, [-3, 2, 7], [0, 0, 0], [5, 8, 1]);
    addPanel("#4a5045", 1, [4, -2, 6], [0, 0, 0], [3, 5, 1]);
    addPanel("#ffffff", 2.6, [2, 5, 6], [0, 0, 0], [3, 3, 1]);

    const texture = pmrem.fromScene(envScene, 0.03).texture;
    scene.environment = texture;

    return () => {
      scene.environment = null;
      texture.dispose();
      pmrem.dispose();
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      envScene.traverse((node) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) node.material.dispose();
      });
    };
  }, [gl, scene]);

  return null;
}

function Sculpture({ reduced }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    const targetY = state.pointer.x * 0.42;
    const targetX = -state.pointer.y * 0.26;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY + Math.sin(state.clock.elapsedTime * 0.25) * 0.12,
      2.2,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      2.2,
      delta
    );
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.16) * 0.05;
  });

  return (
    <group ref={group} scale={0.88}>
      <GlassOrb />
      <ChromeForms />
      <LiquidRibbon />
      <OrbitalRings />
      <SmallOrbs />
    </group>
  );
}

export default function HeroScene({ reduced = false }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.4], fov: 38 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.08;
      }}
      aria-hidden="true"
    >
      <StudioEnvironment />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#ffffff" />
      <pointLight
        position={[-5, -3, 2]}
        intensity={22}
        color="#c9f24d"
        distance={12}
      />
      <Suspense fallback={null}>
        <Sculpture reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}

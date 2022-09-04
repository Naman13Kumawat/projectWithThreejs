import { OrbitControls, Stars, useFBX, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import "./App.css";

function Donut(props) {
  const { nodes, materials } = useGLTF("/model/interesting_donut/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.04, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.donut}
            />
          </group>
          <group position={[0, 0.04, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.icing}
            />
          </group>
          <group
            position={[0.08, 0.08, 0.01]}
            rotation={[1.45, 0.07, 3.01]}
            scale={0.14}
          >
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.sprinkles_bake}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

function Arcane() {
  const fbx = useFBX("/model/arcane/source/Nova pasta/arma jinxpexp.fbx");
  return <primitive object={fbx} />;
}

function Car() {
  const fbx = useFBX("/model/chevrolet/source/malibuthing.fbx");
  return <primitive object={fbx} />;
}

export default function App() {
  return (
    <div className="container">
      <h1>FBX</h1>
      <div className="canvas_box">
        <Canvas camera={{ fov: 75, position: [300, 150, 300] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            {/* <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            /> */}
            {/* <Stars /> */}
            {/* <Donut /> */}
            {/* <Arcane /> */}
            <Car />
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

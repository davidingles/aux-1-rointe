/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/3D ROINTE MPCASPT.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.15, 0.02, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group position={[0.01, 0.02, 0.14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom002"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom002_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom002_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group position={[0.08, 0.04, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001"].geometry}
          material={materials["TQ_ARD_front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_1"].geometry}
          material={materials["back-dil"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_2"].geometry}
          material={materials["TQ_ARD_edge.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D ROINTE MPCASPT.gltf");

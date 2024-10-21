/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Jonrss (https://sketchfab.com/huy14320000006)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bugati-divo-dca375fefc65461d8a383172b235d0a9
Title: Bugati Divo
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"
import { useGSAP } from '@gsap/react'
import gsap, { Expo } from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'
export function Model({setHoverred, hovered,...props}) {
  const { nodes, materials } = useGLTF('/bugati_divo.glb')
  // const [hovered, setHovered] = useState(false)
  const car = useRef()
  const {camera} = useThree()
  // const viewport = useThree((state)=>state.viewport)
  const carscale = Math.max(window.innerWidth / 15300, .04)
  // Animate the camera when the hovered state changes
  useEffect(() => {
    if (hovered) {
      gsap.to(camera.position, {
        x: -5.6,
        y: 6,
        z: 0,
        delay: .3,
        duration: 2,
        ease: Expo.easeInOut
      })
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 1.5,
        z: 6.5,
        delay: .3,
        duration: 2,
        ease: Expo.easeInOut
      })
    }
  }, [hovered, camera.position])



  // console.log(hovered)
  return (
    <group {...props} ref={car} dispose={null} scale={carscale}  >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_1}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material_2}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      >
        <meshStandardMaterial color={"black"} metalness={0} roughness={.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material_3}
        position={[8.147, 4.042, -14.947]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-11.232, 11.232, 11.232]}
      >
        <meshStandardMaterial color={"black"} roughness={.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_4}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      >
        <meshStandardMaterial color={"white"} roughness={0} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['1920']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['1213']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['891011']}
        position={[8.147, 4.02, -16.555]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-11.232, 11.232, 11.232]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material_8}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['71415']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['1920']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['71415']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.material_2}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['891011']}
        position={[8.147, 4.02, -16.555]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-11.232, 11.232, 11.232]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['71415']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['1213']}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.material_10}
        position={[-0.003, 1.646, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.151, 10.151, 10.151]}
        >
            <meshStandardMaterial color={"#00f7ff"}  roughness={0.3} side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.material_3}
        position={[8.147, 3.853, 12.571]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.692, 10.692, 10.692]}
      >
        <meshStandardMaterial color={"black"} roughness={.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['891011']}
        position={[8.147, 3.832, 10.963]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.692, 10.692, 10.692]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['891011']}
        position={[8.147, 3.832, 10.963]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-10.692, 10.692, 10.692]}
      />
    </group>
  )
}

useGLTF.preload('/bugati_divo.glb')

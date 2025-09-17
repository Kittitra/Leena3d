'use client';

import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls, useGLTF } from '@react-three/drei';
import ShowCastLight from './ShowCastLight';
import * as THREE from 'three'




export default function ShowCastExp(){
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { scene } = useGLTF('/models/leena_Showcase_card.glb');

    useEffect(() => {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          mesh.castShadow = true
          mesh.receiveShadow = true
        }
      })
    }, [scene])

  return (
    <Canvas camera={{ position: isMobile ? [10, 0, 50] : isTablet ? [1, 0, 15] : [1, 0, 15], fov: 45  }}  shadows={{ type: THREE.PCFSoftShadowMap }}>
        <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
        />

        <ShowCastLight />

        <mesh
            receiveShadow
            position={isMobile ? [0, 0, 0] : isTablet ? [0, -5, 0] : [0, -5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>


        <group
            scale={isMobile ? 10 : isTablet ? 5.5 : 5}
            position={isMobile ? [0, 0, 0] : isTablet ? [0, -5, 0] : [0, -5, 0]}
        >
            <primitive object={scene} castShadow />
        </group>
    </Canvas>
  )
}




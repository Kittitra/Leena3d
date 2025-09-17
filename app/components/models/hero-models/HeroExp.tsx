'use client';

import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import HeroLights from './HeroLights'
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function PreloadHeroModel() {
  useEffect(() => {
    useGLTF.preload('/models/leena-hero.glb')
  }, [])
  return null
}

export default function HeroExp() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { scene } = useGLTF('/models/leena-hero.glb');

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
    <Canvas camera={{ position: [1, 0, 15], fov: 45  }}  shadows={{ type: THREE.PCFSoftShadowMap }}>
        <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
        />
        <HeroLights />
        <group
            scale={isMobile ? 3.5 : isTablet ? 4.5 : 8}
            position={isMobile ? [0.5, -3, 0] : isTablet ? [0, -5, 0] : [0, -12, 0]}
        >
            <PreloadHeroModel />
            <primitive object={scene} castShadow />
        </group>
    </Canvas>
  )
}




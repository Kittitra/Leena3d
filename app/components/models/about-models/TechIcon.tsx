'use client';

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from 'three';

type Props = {
    model: {
        url: string
        xlSize: number
        mdSize: number
    };
}

export default function TechIcon (props: Props) {
    const scene = useGLTF(props.model.url);
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
            scene.scene.traverse((child) => {
                if(child instanceof THREE.Mesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' })
                }
            })
    }, [scene])

  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset="city" />
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <OrbitControls enableZoom={false} enableRotate={true} />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={isMobile ? props.model.mdSize : isTablet ? props.model.xlSize : props.model.xlSize} >
                <primitive object={scene.scene} />
            </group>
        </Float>

    </Canvas>
  )
}

'use client';

import { useMediaQuery } from 'react-responsive';
import * as THREE from 'three';


export default function HeroLights() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>

    <ambientLight intensity={1.5} color={'#FFD1BD'} />

    <pointLight 
     position={isMobile ? [-2, 4, 1] : isTablet ? [0,0,0] : [-7, 4, 2]}
     color={'#FF6600'}
     intensity={25}
     distance={15}
    />
    <pointLight 
     position={[-7, 2, 3]}
     color={'#FF6600'}
     intensity={25}
     distance={15}
    />

     <directionalLight 
          castShadow
          position={[-2, 1.7, 4]}
          color={'#FFBEAD'}
          intensity={2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.001}
     />

     <directionalLight 
          position={[-4, 4.4, 4.5]}
          color={'#FF6714'}
          intensity={1.2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.001}
     />

    </>
  )
}

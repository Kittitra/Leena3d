import * as THREE from 'three';

const ShowCastLight = () => {
  return (
    <>

    <ambientLight intensity={0.8} color={'#FFD1BD'} />

    <pointLight 
     position={[-7, 4, 2]}
     color={'#FF6600'}
     intensity={25}
     distance={15}
     castShadow
    />
    <pointLight 
     position={[7, 2, 3]}
     color={'#FF6600'}
     intensity={25}
     distance={15}
    />

     <directionalLight 
          position={[-2, 1.7, 2]}
          color={'#FFBEAD'}
          intensity={2}
     />

     <directionalLight 
          position={[4, 4.4, -4.5]}
          color={'#FF6714'}
          intensity={1.2}
     />

     <directionalLight
        castShadow
        position={[-2, 5, 5]}
        color={'#ffffff'}
        intensity={1.5}
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
        castShadow
        position={[2, 5, 5]}
        color={'#9112BC'}
        intensity={3.5}
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

export default ShowCastLight
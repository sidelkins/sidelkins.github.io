import React, { Suspense } from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'

function DisplayModel() {
   return (
      <Canvas
         camera={{ position: [-10, -85, 50],fov: 50}}
         style={{
            backgroundColor: '#191f24',
            width: '75vw',
            height: '75vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[12, 4, -12]} />
            </Suspense>
         <OrbitControls />
      </Canvas>
   );
}

export default DisplayModel;

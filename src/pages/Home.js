import React, { useRef, Suspense } from 'react';
import { VStack,
    HStack,
    Heading,
 } from "@chakra-ui/layout";
 import "../styles/animations.css"
 import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Home() {

    function Model({ ...props }) {
        const group = useRef()
        const { nodes, materials } = useGLTF('/Model.glb')
        useFrame((state, delta) => (group.current.rotation.y += 0.0075))

        return (
          <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat21} />
            <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat8} />
            <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat19} />
            <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat18} />
            <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat15} />
            <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat17} />
            <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat22} />
            <mesh geometry={nodes['Node-Mesh_7'].geometry} material={materials.mat25} />
            <mesh geometry={nodes['Node-Mesh_8'].geometry} material={materials.mat3} />
          </group>
        )
      }
      
      function DisplayModel() {
        return (
           <Canvas
              camera={{ position: [0, 1, -3],fov: 50}}
              style={{
                 width: '75vw',
                 height: '75vh',
              }}
           >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.2} />
              <Suspense fallback={null}>
                 <Model position={[0, 0, 0]} />
                 </Suspense>
              <OrbitControls />
           </Canvas>
        );
     }

    return(
        <DisplayModel></DisplayModel>
    );
}

export default Home;
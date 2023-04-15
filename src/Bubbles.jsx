import React, { useRef, useEffect } from 'react'
import { Float, MeshReflectorMaterial, Sphere, useTexture, Center } from "@react-three/drei"
import Text from './text'

export default function Bubbles() {
  const texture = useTexture("/nx.jpg")

  return (
    <group position={[0,-4,48]}>
      <Text title="ABOUT" position={[-.5,.5,.5]} />
      <mesh position={[0, 0, 0]} >
        <planeGeometry args={[10, 10]} rotation={[0,0,0]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      <Float floatIntensity={5} speed={2}>
        <Sphere position={[1,0,2.2]} scale={.2}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={6} speed={2.2}>
        <Sphere position={[0,-1,2.4]} scale={.1}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={7} speed={1.8}>
        <Sphere position={[1.4,0,1.8]} scale={.15}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={8} speed={1.5}>
        <Sphere position={[-2,1.4,1.6]} scale={.3} >
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={9} speed={2.8}>
        <Sphere position={[1.8,0,1.4]} scale={.12}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={4} speed={2.6}>
        <Sphere position={[0,1.8,1.2]} scale={.18}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={3} speed={2.4}>
        <Sphere position={[-1.2,.7,1]} scale={.11}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={7} speed={2.2}>
        <Sphere position={[.5,2,1.5]} scale={.22}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={3} speed={3}>
        <Sphere position={[-1.7,.3,1.8]} scale={.16}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
      <Float floatIntensity={5} speed={2}>
        <Sphere position={[.3,-2.5,2.2]} scale={.14}>
          <MeshReflectorMaterial transparent opacity={.7} mirror={1} />
        </Sphere>
      </Float>
    </group>
  )
}
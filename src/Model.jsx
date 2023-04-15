import React from 'react'
import { useGLTF } from '@react-three/drei'
import Text from './Text.jsx'

useGLTF.preload('/canyon.glb')
useGLTF.preload('/temple.glb')

export function Canyon(props) {
  const { nodes, materials } = useGLTF('/canyon.glb')
  return (
    <group {...props} dispose={null} scale={1} >
      <group position={[-184.48, -125, -61.05]} scale={[1.49, 3.43, 1.49]}>
        <mesh geometry={nodes.Sea_Canyon_4_1.geometry} material={materials['Sea Bed']} receiveShadow />
        <mesh geometry={nodes.Sea_Canyon_4_2.geometry} material={materials['Rock 4']} />
      </group>
    </group>
  )
}

export default function Model() {
  const { nodes, materials } = useGLTF('/temple.glb')
  return (
    <>
      <Text position={[0,-180,-270]} title="F.A.Q." rotation={[0,Math.PI/4,0]} scale={10} />
      <group rotation={[0, 1.5, 0]} position={[0,-220,-400]}>
        <Canyon />
        <group dispose={null} scale={1}>
          <mesh geometry={nodes.Tall_Column.geometry} material={materials.Temple} position={[-32.02, 0.28, -20.58]} scale={[2.31, 3.99, 2.31]} castShadow receiveShadow />
          <group position={[6.68, 48.98, 0.16]} scale={2.31}>
            <mesh geometry={nodes.Roof_3_1.geometry} material={materials.Temple} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_3_2.geometry} material={materials['Roof 1']} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_3_3.geometry} material={materials['Roof 2']} castShadow receiveShadow />
          </group>
          <mesh geometry={nodes.Window_Corner.geometry} material={materials.Temple} position={[5.89, 30.68, 0.41]} scale={5.15} castShadow receiveShadow />
          <mesh geometry={nodes.Stairs_1.geometry} material={materials.Temple} position={[-21.13, 4.44, -8.41]} rotation={[0, 1.57, 0]} scale={2.31} castShadow receiveShadow />
          <mesh geometry={nodes.Stairs_2.geometry} material={materials.Temple} position={[-25.27, 4.44, -12.58]} scale={2.31} castShadow receiveShadow />
          <group position={[-29.36, 30.58, -21.9]} scale={2.31}>
            <mesh geometry={nodes.Roof_1_1.geometry} material={materials.Temple} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_1_2.geometry} material={materials['Roof 1']} castShadow receiveShadow />
          </group>
          <mesh geometry={nodes['Arch_1_(2)'].geometry} material={materials.Temple} position={[-18.86, 29.02, -12.56]} rotation={[0, 1.57, 0]} scale={[1.16, 2.39, 1.25]} castShadow receiveShadow />
          <mesh geometry={nodes.Stairs_1001.geometry} material={materials.Temple} position={[-21.13, 4.44, -0.08]} rotation={[0, 1.57, 0]} scale={2.31} castShadow receiveShadow />
          <mesh geometry={nodes.Stairs_1002.geometry} material={materials.Temple} position={[-21.13, 4.44, 8.24]} rotation={[0, 1.57, 0]} scale={2.31} castShadow receiveShadow />
          <mesh geometry={nodes.Stairs_2001.geometry} material={materials.Temple} position={[-21.12, 4.44, 16.56]} rotation={[0, 1.57, 0]} scale={2.31} castShadow receiveShadow />
          <mesh geometry={nodes.Tall_Column001.geometry} material={materials.Temple} position={[-32.02, 0.28, -5.81]} scale={[2.31, 3.99, 2.31]} castShadow receiveShadow />
          <mesh geometry={nodes.Tall_Column002.geometry} material={materials.Temple} position={[-32.02, 0.28, 10.43]} scale={[2.31, 3.99, 2.31]} castShadow receiveShadow />
          <mesh geometry={nodes.Tall_Column003.geometry} material={materials.Temple} position={[-32.02, 0.28, 25.65]} scale={[2.31, 3.99, 2.31]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top001.geometry} material={materials.Temple} position={[9.99, 14.67, -12.56]} rotation={[Math.PI / 2, 0, 0]} scale={[17.28, 7.7, 7.97]} castShadow receiveShadow />
          <mesh geometry={nodes['Arch_1_(2)001'].geometry} material={materials.Temple} position={[-18.86, 29.02, 12.53]} rotation={[0, -1.57, 0]} scale={[1.16, 2.39, 1.25]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top002.geometry} material={materials.Temple} position={[9.99, 14.67, 20.84]} rotation={[Math.PI / 2, 0, 0]} scale={[17.28, 7.7, 7.97]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top003.geometry} material={materials.Temple} position={[10.01, 4.05, 16.7]} rotation={[Math.PI / 2, 0, 0]} scale={[17.28, 30.37, 0.21]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top004.geometry} material={materials.Temple} position={[40.68, 15.47, 13.46]} rotation={[Math.PI / 2, 0, 0]} scale={[0.31, 25.65, 7.54]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top005.geometry} material={materials.Temple} position={[1.8, 0.16, 30.02]} rotation={[Math.PI / 2, 0, 0]} scale={[21.87, 54.88, 0.21]} castShadow receiveShadow />
          <mesh geometry={nodes.Arch_Top006.geometry} material={materials.Temple} position={[4.39, 29.83, 26.76]} rotation={[Math.PI / 2, 0, 0]} scale={[21.44, 49.59, 0.52]} castShadow receiveShadow />
          <group position={[-29.39, 30.58, 22.04]} scale={2.31}>
            <mesh geometry={nodes.Roof_1001_1.geometry} material={materials.Temple} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_1001_2.geometry} material={materials['Roof 1']} castShadow receiveShadow />
          </group>
          <group position={[38.03, 30.58, -21.8]} scale={2.31}>
            <mesh geometry={nodes.Roof_1002_1.geometry} material={materials.Temple} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_1002_2.geometry} material={materials['Roof 1']} castShadow receiveShadow />
          </group>
          <group position={[38.08, 30.58, 21.81]} scale={2.31}>
            <mesh geometry={nodes.Roof_1003_1.geometry} material={materials.Temple} castShadow receiveShadow />
            <mesh geometry={nodes.Roof_1003_2.geometry} material={materials['Roof 1']} castShadow receiveShadow />
          </group>
          <mesh geometry={nodes.Window_Corner001.geometry} material={materials.Temple} position={[7.65, 30.68, 0.4]} rotation={[Math.PI, 0, Math.PI]} scale={5.15} castShadow receiveShadow />
        </group>
      </group>
    </>

  )
}


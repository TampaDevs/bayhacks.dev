import React from 'react'
import * as THREE from 'three'
import { MathUtils } from 'three'
import { shaderMaterial, Points } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { rotate, lerp } from 'maath/buffer'

const PointsMaterial = shaderMaterial()
extend({ PointsMaterial })

const rotationAxis = new THREE.Vector3(0, 1, 0).normalize()
const q = new THREE.Quaternion()

export default function Triangles() {
  const length = 1_000

  const positionA = Float32Array.from({ length }, () => MathUtils.randFloatSpread(500))
  const positionB = Float32Array.from({ length }, () => MathUtils.randFloatSpread(1000))
  const positionFinal = positionB.slice(0)
  
  useFrame(() => {
    lerp(positionA, positionB, positionFinal, .01)
    rotate(positionB, {
      q: q.setFromAxisAngle(rotationAxis, .01),
    })
  })

  return (
    <Points positions={positionFinal} position={[0,-252,0]}>
      <pointsMaterial color='#82b2ff' depthWrite={false} />
    </Points>
  )
}
import React, { useRef, useEffect, useState } from 'react'
import { Float, Text3D, MeshReflectorMaterial, Sphere, useTexture, Center, Text } from "@react-three/drei"
import * as THREE from 'three'
// import {sheet} from './App.jsx'
const text = insertNewLine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

function insertNewLine(str) {
  let result = ''
  let currentLine = ''
  let words = str.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (currentLine.length + words[i].length > 35) {
      result += currentLine.trim() + '\n'
      currentLine = ''
    }
    currentLine += words[i] + ' '
  }
  return result + currentLine.trim()
}

export default function WelcomeText() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    console.log('scrollololol')
    setScrollPosition(position)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    const interval = setInterval(() => {
      // console.log(sheet.sequence.position)
    }, 1000)
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // final 4.5, 5, -19

  useEffect(() => {
    console.log('update', scrollPosition)
  }, [scrollPosition])

  return (
    <>
      <Center position={[8,27,-15]} rotation={[0,-.8,0]} scale={.5}>
        {/* <Float floatIntensity={.4} speed={.9}> */}
          <Text3D font="/font.json" size={4.5} height={2.4}>
            {"Welcome\nHackers"}
            <meshNormalMaterial />
          </Text3D>
        {/* </Float> */}
        {/* <Text font="/font.json" scale={.3} >
          {text}
          <meshLambertMaterial color="#13042d" side={THREE.FrontSide} />
        </Text> */}
      </Center>
      <Center position={[-9.5,2,6]} rotation={[0,-.8,0]} scale={.5}>
        <Text font="/font.json" scale={.15} >
          {text}
          <meshLambertMaterial color="#13042d" side={THREE.FrontSide} />
        </Text>
      </Center>
    </>
    
  )
}

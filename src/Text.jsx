import React, { useState } from 'react'
import { Float, Text3D, useTexture, useVideoTexture, Text, Plane, Html, RoundedBox, Center } from "@react-three/drei"
import ThreeMeshUI from 'three-mesh-ui'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { safari } from './App.jsx'
import { useStore } from './Main.jsx'
import { box1Title, box2Body, box2Title, box3Title, box4Body, box4Title } from './text/index.js'

extend(ThreeMeshUI)


function insertNewLine(str, char) {
  let result = ''
  let currentLine = ''
  let words = str.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (currentLine.length + words[i].length > char) {
      result += currentLine.trim() + '\n'
      currentLine = ''
    }
    currentLine += words[i] + ' '
  }
  return result + currentLine.trim()
}

export default function AllText({ mobile }) {
  const setShowM1 = useStore(state => state.setShowM1)
  const setShowM2 = useStore(state => state.setShowM2)
  const setShowM3 = useStore(state => state.setShowM3)

  return (
    <>
      <Box1 mobile={mobile} />
      <Box2 />
      <Box3 />
      <Box4 />
      <Text5 />
      <Button position={[-0.9, 9.59, 40.26]} rotation={[-3.04,0.51, -3.09]} scale={1} text="RSVP" onClick={() => setShowM1(true)} />
      <Button position={[-0.788, 9.207, 39.975]} rotation={[-3.04,0.509, -3.095]} scale={.9} text="Location" onClick={() => setShowM2(true)} />
      <Button position={[-0.698, 8.94, 39.77]} rotation={[-3.04,0.509, -3.095]} scale={.8} text="Prizes" onClick={() => setShowM3(true)} />
    </>
  )
}

function Button({scale, rotation, position, text, onClick}) {
  useFrame(() => ThreeMeshUI.update())
  const [hovered, setHovered] = useState()
  const [down, setDown] = useState()

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={onClick} >
      <block
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => setDown(false)}
      args={[{
        borderRadius: 0.1,
        width: down?1.2 :1,
        height: down?.24: .2,
        backgroundColor: hovered ? new THREE.Color(0x2e2e2e) : new THREE.Color(0x000000),
      }]}>
        <Text3D font="/assets/font-3d.json" size={.1} height={.01} position={[-.433,-.04,0]} onClick={onClick}>
          {text}
          <meshLambertMaterial color={hovered ? new THREE.Color(0xc4d3ff) : new THREE.Color(0xffffff)} />
        </Text3D>
      </block>
    </group>
  )
}

function Box1({ mobile }) {
  const texture = useVideoTexture(mobile ? '/assets/scroll.mp4' : '/assets/scroll-desktop.mp4')
  return (
    <group scale={.1} position={[-6,1.5,4]} rotation={[0,-.75,0]}>
      <RoundedBox args={[20, 20, .0001]} radius={1}>
        <meshBasicMaterial
          color={mobile ? new THREE.Color( 'rgb(45,45,45)'  ) : new THREE.Color(0x000000)}
        />
      </RoundedBox>
      <Center position={[0,9,1]}>
        <Text3D font="/assets/font-3d.json" size={1.8} height={.08} position={[-1.2,1,0]} >
          {box1Title}
        </Text3D>
      </Center>
      <Center position={[0,0,1]}>
        <mesh position={[0,0,0]} scale={3.5}>
          <meshBasicMaterial map={texture} toneMapped={false} />
          <planeGeometry args={[5, 5]} />
        </mesh>
      </Center>
    </group>
  )
}

function Box2() {
  return (
    <group scale={.1} position={[-0.1,13,0.26]}>
      <RoundedBox args={[20, 20, .0001]} radius={.5}>
        <meshBasicMaterial color="black" transparent opacity={.9} />
      </RoundedBox>
      <Float floatIntensity={2} speed={2} rotationIntensity={.1}>
        <Center position={[0,9,1]}>
          <Text3D font="/assets/font-3d.json" height={.1}>
            {box2Title}
            <meshBasicMaterial color={new THREE.Color(0x8effa1)} />
          </Text3D>
        </Center>
      </Float>
      <Text position={[0,0,1]} maxWidth={18}>
        <meshBasicMaterial />
        {box2Body}
      </Text> 
    </group>
  )
}

function Box3() {
  const texture = useTexture('/assets/video-thumb.jpg')
  const setShowVideo = useStore(state => state.setShowVideo)

  return (
    <group onClick={() => setShowVideo(true)}>
      <mesh position={[4.269,4.213,0.6746]} rotation={[-1.566, -0.4, -1.579]} scale={[0.2268,0.1458, 1]} onClick={() => setShowVideo(true)}>
        <meshBasicMaterial map={texture} toneMapped={false} />
        <planeGeometry args={[5, 5]} />
      </mesh>
      <group position={[4.35, 4.22,0.68]} rotation={[-1.56, -0.40, -1.57]} scale={.1}>
        <RoundedBox args={[12.4, 12.4, .000001]} radius={.4}>
          <meshBasicMaterial color="black" transparent opacity={.9} />
        </RoundedBox>
        <Center position={[0,5,.1]}>
          <Text3D font="/assets/font-3d.json" height={.01} size={.8}>
            {box3Title}
            <meshBasicMaterial color={new THREE.Color(0xff9465)} />
          </Text3D>
        </Center>
      </group>
    </group>
  )
}

function Box4() {
  return (
    <group scale={.1} position={[6.776, 2.84,-15.876]} rotation={[0.11, -0.08, 0.03]} >
      <RoundedBox args={[20, 20, .0001]} radius={.5}>
        <meshBasicMaterial color="black" transparent opacity={.9} />
      </RoundedBox>
      <Float floatIntensity={2} speed={2} rotationIntensity={.1}>
        <Center position={[0,8,1]}>
          <Text3D font="/assets/font-3d.json" height={.1}>
            {box4Title}
            <meshBasicMaterial color={new THREE.Color(0x8effa1)} />
          </Text3D>
        </Center>
      </Float>
      <Text position={[0,0,1]} maxWidth={18} fontSize={.8}>
        <meshBasicMaterial />
        {box4Body}
      </Text> 
    </group>
  )

  return (
    <group position={[6.776, 2.84,-15.876]} rotation={[0.11, -0.08, 0.03]} scale={.7}>
      <block 
      position={[0,0,0]}
      rotation={[0,0,0]}
      args={[{
        fontFamily: '/assets/font.json',
        fontTexture: '/assets/font.png',
        borderRadius: [.1, .1, .1, .1],
        width: 1.8,
        height: 1.8,
        fontSize: .2,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        justifyContent: 'center',
      }]}>
        <Text3D font="/assets/font-3d.json" size={.09} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
          F.A.Q.
          <meshLambertMaterial color={new THREE.Color(0x8fb7ff)} />
        </Text3D>
        <Text3D font="/assets/font-3d.json" size={.05} height={.01} position={[-.8,.6,0]}>
          {`WHO: ${insertNewLine('Participants: Students, programmers, developers, and tech enthusiasts.', 40)}\n\nWHAT: ${insertNewLine('A hackathon is a competition where teams collaborate to develop a software, hardware, or other technology-based solution over a weekend', 40)}\n\nWHY: ${insertNewLine('The purpose of a hackathon is to encourage creativity, innovation, and problem-solving skills. Hackathons provide participants with an opportunity to network, gain valuable technical experience, and potentially even launch their own startup.', 40)}`}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
      </block>
    </group>
  )
}

function Text5() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[-0.83, 11.85, 41.19]} rotation={[2.67, 0.43, -2.86]}>
      <block
      args={[{
        contentDirection: 'row-reverse',
        fontFamily: '/assets/font.json',
        fontTexture: '/assets/font.png',
        borderRadius: 0.1,
        width: 1.8,
        height: 1.8,
        fontSize: .2,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        justifyContent: 'center',
      }]}>
        <Text3D font="/assets/font-3d.json" size={.1} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
          Schedule
          <meshLambertMaterial color={new THREE.Color(0x8fb7ff)} />
        </Text3D>
        <Text3D font="/assets/font-3d.json" size={.074} height={.01} position={[-.8,.5,0]}>
          {`The event date is currently TBA\n\nEarly - Mid October, 2023\n\nThe event will be over a full weekend,\nFriday, Saturday and Sunday`}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
      </block>
    </group>
  )
}
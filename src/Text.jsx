import React, { useState } from 'react'
import { Float, Text3D, useTexture, Center, useVideoTexture } from "@react-three/drei"
import ThreeMeshUI from 'three-mesh-ui'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import {safari, mobile} from './App.jsx'
import { useStore } from './Modal.jsx'

extend(ThreeMeshUI)

const texty = insertNewLine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 35)

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

export default function AllText() {
  const setShowM1 = useStore(state => state.setShowM1)
  const setShowM2 = useStore(state => state.setShowM2)
  const setShowM3 = useStore(state => state.setShowM3)

  return (
    <>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
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
        <Text3D font="/font.json" size={.1} height={.01} position={[-.433,-.04,0]} onClick={onClick}>
          {text}
          <meshLambertMaterial color={hovered ? new THREE.Color(0xc4d3ff) : new THREE.Color(0xffffff)} />
        </Text3D>
      </block>
    </group>
  )
}

function Text1() {
  const texture = useVideoTexture(mobile ? '/scroll.mp4' : '/scroll-desktop.mp4')
  useFrame(() => ThreeMeshUI.update())
  return (
    <block 
      position={[-6,1.5,4]}
      rotation={[0,-.75,0]}
    args={[{
      fontFamily: '/font-roboto.json',
      fontTexture: '/font-text.png',
      borderRadius: [.8, .8, .8, .8],
      backgroundOpacity: safari ? 0 : 1,
      width: 3,
      height: 3,
      fontSize: .3,
      fontColor: new THREE.Color('white'),
      backgroundColor: mobile ? new THREE.Color( 'rgb(92,92,92)'  ) : new THREE.Color(0x000000),
      justifyContent: 'center',
    }]}>
      <Text3D font="/font.json" size={.3} height={.08} position={[-1.2,1,0]}>
        Try Scrolling
        <meshLambertMaterial color={new THREE.Color('white')} />
      </Text3D>
      <block args={[{
        offset: .001,
        backgroundOpacity: 0,
      }]}>
        <mesh position={[0,0,0]} scale={.5}>
          <meshBasicMaterial map={texture} toneMapped={false} />
          <planeGeometry args={[5, 5]} />
        </mesh>
      </block>
    </block>
  )
}

function Text2() {
  useFrame(() => ThreeMeshUI.update())

  return (
    <block 
    position={[-0.1,12.161,0.26]}
    rotation={[0,0,0]}
    scale={1}
    // scale={1}
    args={[{
      fontFamily: '/font-roboto.json',
      fontTexture: '/font-text.png',
      borderRadius: .2,
      width: 1.8,
      height: 1.8,
      fontSize: .2,
      fontColor: new THREE.Color('white'),
      backgroundColor: new THREE.Color('black'),
      justifyContent: 'center',
    }]}>
      <Float floatIntensity={.5} speed={3} rotationIntensity={.1}>
        <Text3D font="/font.json" size={.08} height={.05} position={[-.7,.7,0]} rotation={[0,0,0]}>
          BayHacks Hackathon 2023
          <meshLambertMaterial color={new THREE.Color(0x8effa1)} />
        </Text3D>
      </Float>
      <Text3D font="/font.json" size={.058} height={.01} position={[-.8,.5,0]}>
        {insertNewLine("Join our hackathon to collaborate with like-minded student and professionals, develop a project from scratch, and showcase your skills to industry experts. With cutting-edge tools and technologies, mentorship, prizes, and just 48 hours to create the most innovative solution, it's an adrenaline-pumping experience that could kickstart your career or startup. Don't miss out on this exciting opportunity!", 42)}
        <meshLambertMaterial color={new THREE.Color('white')} />
      </Text3D>
    </block>
  )
}

function Text3() {
  const texture = useTexture('/video-thumb.jpg')
  useFrame(() => ThreeMeshUI.update())
  const setShowVideo = useStore(state => state.setShowVideo)

  return (
    <group onClick={() => setShowVideo(true)}>
      <mesh position={[4.269,4.213,0.6746]} rotation={[-1.566, -0.4, -1.579]} scale={[0.2268,0.1458, 1]} onClick={() => setShowVideo(true)}>
        <meshBasicMaterial map={texture} toneMapped={false} />
        <planeGeometry args={[5, 5]} />
      </mesh>
      <group position={[4.35, 4.22,0.68]} rotation={[-1.56, -0.40, -1.57]} scale={.7}>
        <block 
        position={[0,0,0]}
        rotation={[0,0,0]}
        args={[{
          fontFamily: '/font-roboto.json',
          fontTexture: '/font-text.png',
          borderRadius: [.1, .1, .1, .1],
          width: 1.8,
          height: 1.8,
          fontSize: .2,
          fontColor: new THREE.Color('white'),
          backgroundColor: new THREE.Color('black'),
          justifyContent: 'center',
        }]}>
          <Text3D font="/font.json" size={.13} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
            2022 Hackathon
            <meshLambertMaterial color={new THREE.Color(0xff9465)} />
          </Text3D>
        </block>
      </group>
    </group>
  )
}

function Text4() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[6.776, 2.84,-15.876]} rotation={[0.11, -0.08, 0.03]} scale={.8}>
      <block 
      position={[0,0,0]}
      rotation={[0,0,0]}
      args={[{
        fontFamily: '/font-roboto.json',
        fontTexture: '/font-text.png',
        borderRadius: [.1, .1, .1, .1],
        width: 1.8,
        height: 1.8,
        fontSize: .2,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        justifyContent: 'center',
      }]}>
        <Text3D font="/font.json" size={.09} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
          F.A.Q.
          <meshLambertMaterial color={new THREE.Color(0x8fb7ff)} />
        </Text3D>
        <Text3D font="/font.json" size={.045} height={.01} position={[-.8,.6,0]}>
          {`WHO: ${insertNewLine('Participants: Students, programmers, developers, and tech enthusiasts.', 40)}\nWHAT: ${insertNewLine('A hackathon is a competition where teams collaborate to develop a software, hardware, or other technology-based solution within a limited time-frame (usually 24-48 hours).', 40)}\nWHY: ${insertNewLine('The purpose of a hackathon is to encourage creativity, innovation, and problem-solving skills. Hackathons provide participants with an opportunity to network, gain valuable technical experience, and potentially even launch their own startup. Companies and organizations sponsor hackathons to identify talent, promote their brand, and solve complex problems through community collaboration.', 40)}`}
          {/* {"WHAT: build a project in 48 hours\n\nWHEN: Early October or \nMid October 2023\n\nWHERE: TBA Tampa,FL\n\nWHO: open to all!\nstudents, new to coding, IT professionals\n\nWHY: Learn new skills,\nmake new connections"} */}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
      </block>
    </group>
  )
}


// WHO:\nParticipants: Students, programmers, developers, and tech enthusiasts.\n\n
// WHAT:\nA hackathon is a competition where teams collaborate to develop a software, hardware, or other technology-based solution within a limited time-frame (usually 24-48 hours).\n\n
// WHY:\nThe purpose of a hackathon is to encourage creativity, innovation, and problem-solving skills. Hackathons provide participants with an opportunity to network, gain valuable technical experience, and potentially even launch their own startup. Companies and organizations sponsor hackathons to identify talent, promote their brand, and solve complex problems through community collaboration.

function Text5() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[-0.83, 11.85, 41.19]} rotation={[2.67, 0.43, -2.86]}>
      <block
      args={[{
        contentDirection: 'row-reverse',
        fontFamily: '/font-roboto.json',
        fontTexture: '/font-text.png',
        borderRadius: 0.1,
        width: 1.8,
        height: 1.8,
        fontSize: .2,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        justifyContent: 'center',
      }]}>
        <Text3D font="/font.json" size={.1} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
          Event Details
          <meshLambertMaterial color={new THREE.Color(0x8fb7ff)} />
        </Text3D>
        <Text3D font="/font.json" size={.07} height={.01} position={[-.8,.5,0]}>
          {texty}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
      </block>
    </group>
  )
}
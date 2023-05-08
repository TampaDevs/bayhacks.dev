import React, { useRef, useEffect, useState } from 'react'
import { Float, Text3D, useTexture, Center, useVideoTexture } from "@react-three/drei"
import ThreeMeshUI from 'three-mesh-ui'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import {safari, mobile} from './App.jsx'
import { editable as e } from "@theatre/r3f"

extend(ThreeMeshUI)

const texty = insertNewLine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")

const textRaw = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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

export default function AllText() {
  return (
    <>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Button1 />
      <Button2 />
      <Text5 />
    </>
  )
}

function Text5() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[-0.83, 11.85, 41.19]} rotation={[2.67, 0.43, -2.86]}>
      <block
      position={[0,0,0]}
      rotation={[0,0,0]}
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

function Button1() {
  useFrame(() => ThreeMeshUI.update())
  const [hovered, setHovered] = useState()
  const [down, setDown] = useState()

  return (
    <e.group theatreKey="one" position={[-0.6618066193957367, 9.436918222674382, 40.583362305805714]} rotation={[2.5799962818501214,0.3272627812873735, -2.596338924048947]}>
      <block
      position={[0,0,0]}
      rotation={[0,0,0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => {
        setDown(false)
      }}
      args={[{
        borderRadius: 0.1,
        width: down?1.2 :1,
        height: down?.24: .2,
        backgroundColor: hovered ? new THREE.Color(0x2e2e2e) : new THREE.Color(0x000000),
      }]}>
        <e.group theatreKey="judge">
          <Text3D font="/font.json" size={.1} height={.01} position={[-.433,-.04,-0.00636379882327711]} rotation={[0,0,0]}>
            Judge Criteria
            <meshLambertMaterial color={hovered ? new THREE.Color(0xc4d3ff) : new THREE.Color(0xffffff)} />
          </Text3D>
        </e.group>
      </block>
    </e.group>
  )
}
function Button2() {
  useFrame(() => ThreeMeshUI.update())
  const [hovered, setHovered] = useState()
  const [down, setDown] = useState()

  return (
    <e.group theatreKey="bt2" position={[-0.7135532361893204, 9.019307170503184, 39.87829748635861]} rotation={[2.7670919433694685,0.32875632079565187, -2.6772324911198657]}>
      <block
      position={[0,0,0]}
      rotation={[0,0,0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => {
        setDown(false)
      }}
      args={[{
        borderRadius: 0.1,
        width: down?1.2 :1,
        height: down?.24: .2,
        backgroundColor: hovered ? new THREE.Color(0x2e2e2e) : new THREE.Color(0x000000),
      }]}>
        <e.group theatreKey="event">
          <Text3D font="/font.json" size={.08} height={.01} position={[-.433,-.04,-0.00636379882327711]} rotation={[0,0,0]}>
            Event Location
            <meshLambertMaterial color={hovered ? new THREE.Color(0xc4d3ff) : new THREE.Color(0xffffff)} />
          </Text3D>
        </e.group>
      </block>
    </e.group>
  )
}


function Text4() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[6.776, 2.84,-15.876]} rotation={[0.11, -0.08, 0.03]} scale={.7}>
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
        <Text3D font="/font.json" size={.1} height={.01} position={[-.7,.7,0]} rotation={[0,0,0]}>
          What are Hackathons?
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

function Text3() {
  useFrame(() => ThreeMeshUI.update())
  return (
    <group position={[5.14, 3.96,0.54]} rotation={[-1.56, -0.40, -1.57]} scale={.7}>
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
          20XX Hackathon
          <meshLambertMaterial color={new THREE.Color(0xff9465)} />
        </Text3D>
        <Text3D font="/font.json" size={.07} height={.01} position={[-.8,.5,0]}>
          {texty}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
      </block>
    </group>
  )
}

function Text2() {
  useFrame(() => ThreeMeshUI.update())

  return (
    <e.group theatreKey="two">
      <block 
      position={[-0.1,12.161,0.26]}
      rotation={[0,0,0]}
      args={[{
        // padding: 1,
        fontFamily: '/font-roboto.json',
        fontTexture: '/font-text.png',
        // fontColor,
        borderRadius: [.1, .1, .1, .1],
        width: 1.8,
        height: 1.8,
        fontSize: .2,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        justifyContent: 'center',
      }]}>
        {/* <text content={textRaw} /> */}
        <Float floatIntensity={.5} speed={3} rotationIntensity={.1}>
          <Text3D font="/font.json" size={.13} height={.05} position={[-.7,.7,0]} rotation={[0,0,0]}>
            Welcome Hackers
            <meshLambertMaterial color={new THREE.Color(0x8effa1)} />
          </Text3D>
        </Float>
        <Text3D font="/font.json" size={.07} height={.01} position={[-.8,.5,0]}>
          {texty}
          <meshLambertMaterial color={new THREE.Color('white')} />
        </Text3D>
        {/* <block args={[{
          offset: .001,
          backgroundOpacity: 0,
        }]}>
          <mesh position={[0,0,0]} scale={.5}>
            <meshBasicMaterial map={texture} toneMapped={false} />
            <planeGeometry args={[5, 5]} />
          </mesh>
        </block> */}
        
        {/* <block args={[{
          width: 5,
          height: 5,
          fontSize: .2,
          offset: .1,
          justifyContent: 'center',
          backgroundOpacity: .4,
          fontColor: new THREE.Color('white'),
          backgroundColor: new THREE.Color('black'),
          // borderRadius: [.3, .3, .3, .3],
        }]}>
          <text content={textRaw} />
        </block> */}
        {/* <inlineBlock args={[{
          height: 5,
          width: 5,
          margin: 0,
          padding: 0,
          backgroundTexture: texture,
          backgroundOpacity: 1,
        }]}/> */}
        {/* <block args={[{
          offset: .1,
          backgroundOpacity: 0,
        }]}> */}

          {/* <e.group theatreKey="one"> */}
            {/* <mesh  position={[-1, .5, 2.4]} scale={[.2,.2,1]}>
              <meshBasicMaterial map={texture} toneMapped={false} />
              <planeGeometry args={[4, 4]} />
            </mesh> */}
            {/* <Text3D font="/font.json" size={.1} height={.01}>
              {textRaw}
              <meshLambertMaterial color="#13042d" />
            </Text3D>
          </e.group> */}

        {/* </block> */}
        {/* <block args={[{
          width: 8,
          height: 4,
          margin: 1,
          justifyContent: 'center',
          textAlign: 'left',
          backgroundOpacity: 1,
        }]}>
          <text content={textRaw} />
        </block> */}
      </block>
    </e.group>
  )
}
function Text1() {
  const texture = useVideoTexture(mobile ? '/scroll.mp4' : '/scroll-desktop.mp4')
  useFrame(() => ThreeMeshUI.update())

  return (

    <group theatreKey="one">

    <block 
      position={[-6,1.5,4]}
      rotation={[0,-.75,0]}
    args={[{
      // padding: 1,
      fontFamily: '/font-roboto.json',
      fontTexture: '/font-text.png',
      // fontColor,
      borderRadius: [.8, .8, .8, .8],
      backgroundOpacity: safari ? 0 : 1,
      width: 3,
      height: 3,
      fontSize: .3,
      fontColor: new THREE.Color('white'),
      // backgroundColor: safari ? new THREE.Color( 'rgb(92,92,92)'  ) : new THREE.Color( 'rgb(92,92,92)'  ),
      backgroundColor: mobile ? new THREE.Color( 'rgb(92,92,92)'  ) : new THREE.Color(0x000000),
      justifyContent: 'center',
      // backgroundColor
    }]}>
      {/* <text content={textRaw} /> */}
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
      {/* <Text3D font="/font.json" size={.15} height={.01} position={[-2,2,0]}>
        {texty}
        <meshLambertMaterial color={new THREE.Color('white')} />
      </Text3D> */}
      {/* <block args={[{
        width: 5,
        height: 5,
        fontSize: .2,
        offset: .1,
        justifyContent: 'center',
        backgroundOpacity: .4,
        fontColor: new THREE.Color('white'),
        backgroundColor: new THREE.Color('black'),
        // borderRadius: [.3, .3, .3, .3],
      }]}>
        <text content={textRaw} />
      </block> */}
      {/* <inlineBlock args={[{
				height: 5,
				width: 5,
        margin: 0,
        padding: 0,
				backgroundTexture: texture,
        backgroundOpacity: 1,
			}]}/> */}
      {/* <block args={[{
        offset: .1,
        backgroundOpacity: 0,
      }]}> */}

        {/* <e.group theatreKey="one"> */}
          {/* <mesh  position={[-1, .5, 2.4]} scale={[.2,.2,1]}>
            <meshBasicMaterial map={texture} toneMapped={false} />
            <planeGeometry args={[4, 4]} />
          </mesh> */}
          {/* <Text3D font="/font.json" size={.1} height={.01}>
            {textRaw}
            <meshLambertMaterial color="#13042d" />
          </Text3D>
        </e.group> */}

      {/* </block> */}
      {/* <block args={[{
        width: 8,
        height: 4,
        margin: 1,
        justifyContent: 'center',
        textAlign: 'left',
        backgroundOpacity: 1,
      }]}>
        <text content={textRaw} />
      </block> */}
    </block>
    </group>

    
  )
}

// function CustomTextOld({title, position, rotation, scale}) {
//   return (
//     <Center position={position} rotation={rotation} scale={scale}>
//       <Float floatIntensity={.4} speed={.9}>
//         <Text3D font="/font.json" size={.4} height={.04} position={[0,.5,0]}>
//           {title}
//           <meshNormalMaterial />
//         </Text3D>
//       </Float>
//       <Text3D font="/font.json" size={.1} height={.01}>
//         {text}
//         <meshLambertMaterial color="#13042d" />
//       </Text3D>
//     </Center>
//   )
// }

// function Text({ text, position, rotation, scale, setText, players, spin }) {
//   const [opacity, setOpacity] = useState(1)
//   const ref = useRef()
//   let timeout = null

//   useEffect(() => {
//     if (!text || !setText) return
//     clearTimeout(timeout)
//     timeout = setTimeout(() => setText(null), 3000)
//   }, [text, setText])

//   useEffect(() => {
//     if (!players) return
//     if (text == 'Start') {
//       let foundATurn = false
//       for (const p of players) {
//         if (p.turn) {
//           foundATurn = true
//           setOpacity(0)
//         }
//       }
//       if (!foundATurn) setOpacity(1)
//     }
//   }, [players])

//   if (!text) return

//   if (spin) {
//     useFrame((_, delta) => ref.current.rotation.y -= delta)

//     // useFrame((state, delta) => (ref.current.rotation.x += delta))

//   }
  
//   return (
//     <mesh position={position} ref={ref} rotation={rotation} scale={scale}>
//       <textGeometry args={[text, { font, size: .1, height: .02 }]} />
//       <meshStandardMaterial attach='material' color='white' transparent opacity={opacity} />
//     </mesh>
//   )
// }

// export function CardInfo({ stack }) {
//   const [text, setText] = useState()
     
//   useEffect(() => {
//     if (!stack) return
//     let txt = ""
//     for (const s of stack) {
//       txt += s + '\n'
//     }
//     setText(txt)
//   }, [stack])

//   if (!text) return

//   return (
//     <mesh position={[2,4,0]} rotation={[0,0,0]}>
//       <textGeometry args={[text, { font, size: .1, height: .02 }]} />
//       <meshStandardMaterial attach='material' color='blue' />
//     </mesh>
//   )
// }

// export function Timer() {
//   const [text, setText] = useState('5')
//   const countdown = useStore(state => state.countdown)
//   const setCountdown = useStore(state => state.setCountdown)

//   useEffect(() => {
//     if (countdown) {
//       setText('5')
//       setTimeout(() => setText('4'), 1000)
//       setTimeout(() => setText('3'), 2000)
//       setTimeout(() => setText('2'), 3000)
//       setTimeout(() => setText('1'), 4000)
//       setTimeout(() => {
//         setCountdown(false)
//         setText(null)
//       }, 5000)
//     } else {
//       setText(null)
//     }
//   }, [countdown])

//   if (!text) return

//   return (
//     <mesh position={[-.085 ,2,-1]} rotation={[-Math.PI /2,0,0]}>
//       <textGeometry args={[text, { font, size: .2, height: .02 }]} />
//       <meshStandardMaterial attach='material' color='red' />
//     </mesh>
//   )
// }
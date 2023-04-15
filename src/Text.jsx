import React, { useRef, useEffect } from 'react'
import { Float, Text3D, MeshReflectorMaterial, Sphere, useTexture, Center } from "@react-three/drei"
 
const text = insertNewLine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

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

//    +          -
// x left  and right
// y up    and down
// z close and far

export default function CustomText({title, position, rotation, scale}) {
  return (
    <Center position={position} rotation={rotation} scale={scale}>
      <Float floatIntensity={.4} speed={.9}>
        <Text3D font="/font.json" size={.4} height={.04} position={[0,.5,0]}>
          {title}
          <meshNormalMaterial />
        </Text3D>
      </Float>
      <Text3D font="/font.json" size={.1} height={.01}>
        {text}
        <meshLambertMaterial color="#13042d" />
      </Text3D>
    </Center>
  )
}

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
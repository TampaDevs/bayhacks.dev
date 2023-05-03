import * as THREE from "three"
import React, { useRef, useEffect, useState } from "react"
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber"
import { ScrollControls, useScroll, Environment, SpotLight, Sky, Plane, OrbitControls, Scroll } from "@react-three/drei"
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f"
import { getProject, val } from "@theatre/core"
import wavesAudio from '/waves.mp3'
// import Temple from './Temple.jsx'
// import Effect from "./Effect.jsx"
import Ships from "./Ships.jsx"
import Water from "./Water.jsx"
import SkyCustom from "./Sky.jsx"
import useAudio from './Audio.jsx'
// import Bubbles from './Bubbles.jsx'
// import WelcomeText from './WelcomeText.jsx'
import state from "./fly-6.json"

export const sheet = getProject("Fly Through", { state }).sheet("Scene")
// export const sheet = getProject("Fly Through").sheet("Scene")
export const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export default function App() {
  const [playingAudio, playWavesAudio] = useAudio(wavesAudio)
  // const sheet = getProject("Fly Through", { state }).sheet("Scene")

  useEffect(() => {
    // playWavesAudio()
  }, [])

  return (
    <Canvas style={{height: '100vh', overflow: 'hidden'}} camera={{position: [-5,2,5]}}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <CustomCamera />
        </SheetProvider>
        <ambientLight intensity={.5} />
        {/* <Bubbles /> */}
        {/* <Temple /> */}
        {/* <WelcomeText /> */}
        {/* <OrbitControls minDistance={20} maxDistance={50} maxPolarAngle={1.5} /> */}
        <Ships />
        
        {
          safari
          ? <>
              <Plane rotation={[-Math.PI/2,0,0]} args={[10000,10000]} position={[0,-.7,0]}>
                <meshLambertMaterial color="#4183ff" />
              </Plane>
              <Sky />
            </>
          : <>
              <Water />
              <SkyCustom />
            </>
        }
      </ScrollControls>
      {/* <Scroll html>
        <h1>html in here (optional)</h1>
        <h1 style={{ top: '100vh' }}>second page</h1>
        <h1 style={{ top: '200vh' }}>third page</h1>
      </Scroll> */}
    </Canvas>
  )
}

function CustomCamera() {
  const sheet = useCurrentSheet();
  const scroll = useScroll()
  const overlay = document.querySelector('#content-1')
  const overlay2 = document.querySelector('#content-2')
  // const [text, setText] = useState('First text')

  useEffect(() => {
    // 

    // console.log()

    const interval = setInterval(() => {
      overlay2.textContent = (sheet.sequence.position).toFixed(2)
      // 0
      // .1017

      // .5088
      // .61
      // .712

      // 1.19
      // 1.22
      // 1.32

      // 1.73
      // 1.93

      // 2.34
      // 2.54

      // 2.95
      // 3.05+
      if (sheet.sequence.position < .11) {
        overlay.textContent = "First position"
      } else if (.5 < sheet.sequence.position && sheet.sequence.position < .72) {
        overlay.textContent = "Second position"
      } else if (1.18 < sheet.sequence.position && sheet.sequence.position < 1.33) {
        overlay.textContent = "Third position"
      } else if (1.72 < sheet.sequence.position && sheet.sequence.position < 1.94) {
        overlay.textContent = "Fourth position"
      } else if (2.33 < sheet.sequence.position && sheet.sequence.position < 2.55) {
        overlay.textContent = "Fifth position"
      } else if (2.94 < sheet.sequence.position) {
        overlay.textContent = "Sixth position"
      }
    }, 50)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    // overlay = document.querySelector('#overlay')

    console.log(sheet.sequence.position)
  }, [sheet])

  useEffect(() => {
    // overlay = document.querySelector('#overlay')

    console.log(scroll.offset)
  }, [scroll])
  

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength


  })



  return (
    <PerspectiveCamera
      theatreKey="Camera"
      makeDefault
      position={[0, 0, 0]}
      fov={90}
      near={0.1}
      far={70}
    />
  )
}
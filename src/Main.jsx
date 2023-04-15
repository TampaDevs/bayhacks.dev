import * as THREE from "three"
import React, { useRef, useEffect, useState } from "react"
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber"
import { ScrollControls, useScroll, Environment, SpotLight } from "@react-three/drei"
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f"
import { getProject, val } from "@theatre/core"
import wavesAudio from '/waves.mp3'
import Model from './model'
import Triangles from "./triangles"
import Ships from "./ships"
import Water from "./water"
import SkyCustom from "./sky"
import useAudio from './audio'
import Bubbles from './bubbles'
import state from "./fly.json"

export default function App() {
  const [playingAudio, playWavesAudio] = useAudio(wavesAudio)
  // const sheet = getProject("Fly Through").sheet("Scene")
  const sheet = getProject("Fly Through", { state }).sheet("Scene")

  useEffect(() => {
    playWavesAudio()
  }, [])

  return (
    <Canvas style={{height: '100vh'}} shadows gl={{ preserveDrawingBuffer: true }}>
      <ScrollControls pages={2}>
        <SheetProvider sheet={sheet}>
          <Bubbles />
          <CustomCamera />
        </SheetProvider>
        <hemisphereLight args={[0xffffbb, 0x080820, .5]} />
        <ambientLight intensity={.5} />
        <directionalLight intensity={1} position={[2, 2, 2]} castShadow shadow-mapSize-height={2048} shadow-mapSize-width={2048} />
        <Model />
        <Ships />
        <Water />
        <SkyCustom />

        {/* Not good performance for Triangles. TODO: try to use Float for them */}
        {/* Might be best to search for better solution and drop Maath package all together */}
        <Triangles />

        <Environment files={['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']} background />
        {/* <Environment files={['px.jpg', 'placeholder.png', 'py.jpg', 'ny.jpg', 'placeholder.png', 'nz.jpg']} background /> */}
      </ScrollControls>
    </Canvas>
  )
}

function CustomCamera() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

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

          {/* <Cartoon /> */}

{/* <Sky
            // distance={1000}
            // inclination={0.6}
            // azimuth={1}
          /> */}
          {/* <Grid cellColor="white" args={[100, 100]} /> */}
          {/* <color attach="background" args={['goldenrod']} /> */}


          {/* <SpotLight
            penumbra={0.5}
            // depthBuffer={256}
            position={[2, 2, 2]}
            distance={10} // how far it shines
            intensity={4}
            angle={0.5}
            color="blue"
            castShadow
          /> */}
          {/* <SpotLight
            penumbra={0.5}
            // depthBuffer={256}
            position={[-3, 2, 0]}
            intensity={0.5}
            angle={0.5}
            color="green"
            castShadow
          /> 
          <SpotLight
            position={[3,2,0]}
            // distance={100} // how far it shines
            // angle={500} // spread
            angle={.5} // spread
            color="red"
            castShadow
            // intensity={1}
            // castShadow={true}
            // attenuation={1} // loss of light
            // attenuation={1100} // loss of light
            // anglePower={5} // Diffuse-cone anglePower (default: 5)
          /> */}
          {/* <Box material-color="blue" castShadow>
            <meshPhongMaterial />
          </Box> */}
          {/* <Plane position={[0,-5,0]} args={[15, 15]} rotation={[-Math.PI /2, 0, 0]} material-color="white" receiveShadow /> */}
          {/* <Plane receiveShadow rotation-x={-Math.PI / 2} args={[100, 100]} position={[0,-5,0]} /> */}
          {/* <SoftShadows /> */}

          {/* shadow-bias={-.0001} */}
          {/* directionalLight.shadow.mapSize.height = 1024;
          directionalLight.shadow.mapSize.width = 1024;
          directionalLight.shadow.camera.far = 250;
          directionalLight.shadow.camera.near = 80;
          directionalLight.shadow.camera.left = -50;
          directionalLight.shadow.camera.right = 50;
          directionalLight.shadow.camera.top = 50;
          directionalLight.shadow.camera.bottom = -50; */}
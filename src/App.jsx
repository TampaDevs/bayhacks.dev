import React  from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { ScrollControls, useScroll, Sky, Plane, useDetectGPU } from "@react-three/drei"
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f"
import { getProject, val } from "@theatre/core"
import Ships from "./Ships"
import Water from "./Water"
import SkyCustom from "./Sky"
import Text from './Text'
import state from "./fly.json"

export const sheet = getProject("Fly Through", { state }).sheet("Scene")
export const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export default function App() {
  const { gl } = useThree()
  const GPUTier = useDetectGPU({ glContext: gl.getContext() })

  return (
    <>
      <ScrollControls pages={5} distance={0.9036}>
        <SheetProvider sheet={sheet}>
          <Camera />
        </SheetProvider>
        <Ships />
        <ambientLight intensity={.5} />
        {
          (safari || GPUTier < 3)
          ? <>
              <Plane rotation={[-Math.PI/2,0,0]} args={[1000,1000]} position={[0,-.7,0]}>
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
      <Text mobile={GPUTier.isMobile} />
    </>
  )
}

function Camera() {
  const sheet = useCurrentSheet();
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
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
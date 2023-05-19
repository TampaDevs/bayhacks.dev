import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Modal from './Modal'
import Loading from './Loading'
import Classic from './Classic'
import { Canvas } from '@react-three/fiber'
import { create } from 'zustand'

// Theatre can be used to map camera keyframes 😎
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
// studio.extend(extension)
// studio.initialize()

export const useStore = create(set => ({
  showTrad: false,
  setShowTrad: () => set(state => ({ showTrad: !state.showTrad })),
  showVideo: false,
  setShowVideo: () => set(state => ({ showVideo: !state.showVideo })),
  showM1: false,
  setShowM1: () => set(state => ({ showM1: !state.showM1 })),
  showM2: false,
  setShowM2: () => set(state => ({ showM2: !state.showM2 })),
  showM3: false,
  setShowM3: () => set(state => ({ showM3: !state.showM3 })),
  playing: false,
  setPlaying: () => set(state => ({ playing: !state.playing })),
  muted: false,
  setMuted: () => set(state => ({ playing: !state.muted })),
}))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{height: '100vh', backgroundColor: '#171717'}}></div>}>
      <Canvas style={{height: '100vh', overflow: 'hidden'}} camera={{position: [-5,2,5], fov: 175}}>
        <App />
      </Canvas>
    </Suspense>
    <Modal />
    <Classic />
    <Loading />
  </React.StrictMode>
)
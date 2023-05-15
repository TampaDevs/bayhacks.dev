import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import App from './App.jsx'
import Modal from './Modal.jsx'
import Loading from './Loading.jsx'
import { Stats } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { create } from 'zustand'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const useStore = create(set => ({
  showVideo: false,
  setShowVideo: () => set(state => ({ showVideo: !state.showVideo })),
  showInfo: false,
  setShowInfo: () => set(state => ({ showInfo: !state.showInfo })),
}))

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{height: '100vh', backgroundColor: '#171717'}}></div>}>
      <Canvas style={{height: '100vh', overflow: 'hidden'}} camera={{position: [-5,2,5], fov: 175}}>
        <App />
      </Canvas>
    </Suspense>
    <Modal />
    <Loading />
    <Stats />
  </React.StrictMode>
)
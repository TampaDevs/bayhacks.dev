import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import App from './App.jsx'
import Modal from './Modal.jsx'
import Loading from './Loading.jsx'
import Classic from './Classic.jsx'
import { Canvas } from '@react-three/fiber'

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
    <Classic />
    <Loading />
  </React.StrictMode>
)
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import App from './App.jsx'
import Loading from './Loading.jsx'
import Overlay from './Overlay.jsx'
import { Stats } from "@react-three/drei"

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{height: '100vh', backgroundColor: '#171717'}}></div>}>
      <App />
      <Overlay />
    </Suspense>
    <Loading />
    <Stats />
  </React.StrictMode>
)
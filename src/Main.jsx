import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import App from './App.jsx'
import { Loader, Stats } from "@react-three/drei"

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
    <Stats />
  </React.StrictMode>,
)
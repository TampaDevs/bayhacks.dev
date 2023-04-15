import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import Main from './Main'
import { Loader, Stats } from "@react-three/drei"

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Main />
    </Suspense>
    <Loader />
    <Stats />
  </React.StrictMode>,
)
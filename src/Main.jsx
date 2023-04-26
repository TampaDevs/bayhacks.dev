import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import App from './App.jsx'
import { Stats, useProgress } from "@react-three/drei"
import loadingIcon from '/loading.jpg'

studio.extend(extension)
studio.initialize()

// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress()

//   console.log(progress)
//   return <Html center>{progress} % loaded</Html>
// }

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#171717',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 300ms ease',
    zIndex: 1000,
  },
  inner: {
    width: '100%',
    height: 3,
    background: '#272727',
    textAlign: 'center',
  },
  bar: {
    height: 3,
    width: '100%',
    background: 'white',
    transition: 'transform 200ms',
    transformOrigin: 'left center',
  },
  data: {
    display: 'inline-block',
    position: 'relative',
    fontVariantNumeric: 'tabular-nums',
    marginTop: '0.8em',
    color: '#f0f0f0',
    fontSize: '0.6em',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    whiteSpace: 'nowrap',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={null}>
        {/* <Canvas style={{height: '100vh'}}> */}
        <App />
        {/* <div style={{height: '100vh', backgroundColor: '#171717'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
            <img src={loadingIcon} style={{width: '15em'}} />
          </div>
        </div> */}


        {/* </Canvas> */}
        <LoaderCustom />
        {/* <div style={{ ...styles.container }}>
          <div>
            <img src={loadingIcon} style={{width: '15em', marginBottom: '2em'}} />
            <div style={{ ...styles.inner }}>
              <div style={{ ...styles.bar, transform: `scaleX(${50 / 100})` }}></div>
              <span style={{ ...styles.data }} />
            </div>
          </div>
        </div> */}
      </Suspense>
      {/* <Loader dataInterpolation={(p) => `${p.toFixed(2)}%`} initialState={(active) => false} /> */}
    <Stats />
  </React.StrictMode>,
)


const defaultDataInterpolation = (p) => `Loading ${p.toFixed(2)}%`

function LoaderCustom({
  containerStyles,
  innerStyles,
  barStyles,
  dataStyles,
  dataInterpolation = defaultDataInterpolation,
  initialState = (active) => active,
}) {
  const { active, progress } = useProgress()
  const progressRef = React.useRef(0)
  const rafRef = React.useRef(0)
  const progressSpanRef = React.useRef(null)
  const [shown, setShown] = React.useState(initialState(active))

  React.useEffect(() => {
    let t
    if (active !== shown) t = setTimeout(() => setShown(active), 300)
    return () => clearTimeout(t)
  }, [shown, active])

  const updateProgress = React.useCallback(() => {
    if (!progressSpanRef.current) return
    progressRef.current += (progress - progressRef.current) / 2
    if (progressRef.current > 0.95 * progress || progress === 100) progressRef.current = progress
    progressSpanRef.current.innerText = dataInterpolation(progressRef.current)
    if (progressRef.current < progress) rafRef.current = requestAnimationFrame(updateProgress)
  }, [dataInterpolation, progress])

  React.useEffect(() => {
    updateProgress()
    return () => cancelAnimationFrame(rafRef.current)
  }, [updateProgress])

  return shown ? (
    <div style={{ ...styles.container, opacity: active ? 1 : 0, ...containerStyles }}>
      <div>
        <img src={loadingIcon} style={{width: '15em', marginBottom: '2em'}} />
        <div style={{ ...styles.inner, ...innerStyles }}>
          <div style={{ ...styles.bar, transform: `scaleX(${progress / 100})`, ...barStyles }}></div>
          <span ref={progressSpanRef} style={{ ...styles.data, ...dataStyles }} />
        </div>
      </div>
    </div>
  ) : null
}


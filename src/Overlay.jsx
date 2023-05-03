import React, { useEffect } from 'react'

const container = {
  height: '20vh',
  width: '100%',
  // border: '1px solid red',
  position: 'fixed',
  bottom: '0px',
  margin: 'auto',
  display: 'flex'
}

const inner = {
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.5)',
  color: 'white',
  fontSize: '2em',
  paddingTop: '2em',
  textAlign: 'center',
  opacity: '.5',
  width: '50%',
  // border: '1px solid green',
  margin: 'auto'
}

export default function Overlay() {
  useEffect(() => {

  }, [])

  return (
    <div style={container}>
      <div style={inner} id="overlay">
        <p id="content-1"></p>
        <p id="content-2"></p>
      </div>
    </div>
  )
}

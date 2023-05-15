import React from 'react'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
// import { useStore } from './main.jsx'
import { create } from 'zustand'

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
}))

export default function AllModals() {

  return (
    <>
      <VideoModal />
      <Modal1 />
      <Modal2 />
      <Modal3 />
    </>
  )
}

function CustomModal({onHide, show, title, content}) {
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100">
        {content}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

function VideoModal() {
  const showVideo = useStore(state => state.showVideo)
  const setShowVideo = useStore(state => state.setShowVideo)

  return (
    <CustomModal 
      content={<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/fEXdLheZW6k" title="Hackathon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
      title="2022 Hackathon"
      show={showVideo}
      onHide={() => setShowVideo(false)}
    />
  )
}

function Modal1() {
  const showM1 = useStore(state => state.showM1)
  const setShowM1 = useStore(state => state.setShowM1)

  const content = (
    <div style={{fontSize: '1.4em'}}>
      <p>This is a score based event. In order to achieve the highest score you will need to meet certain criteria. The list of criteria for which attendants will be judged on can be found below.</p>
      <ul>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </div>
  )

  return (
    <CustomModal 
      content={content}
      title="Judge Criteria"
      show={showM1}
      onHide={() => setShowM1(false)}
    />
  )
}
function Modal2() {
  const showM2 = useStore(state => state.showM2)
  const setShowM2 = useStore(state => state.setShowM2)

  const content = (
    <>
      <p style={{fontSize: '1.4em'}}>The event will be held at Armature Works</p>
      {/* <iframe width="100%" height="470" style={{border: '0px'}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=17&center=27.9612,-82.4637&key=AIzaSyArof4ztwgHl5UfJOyR5efSxCWoCrjOn_Q"></iframe> */}
    </>
  )

  return (
    <CustomModal 
      content={content}
      title="Event Location"
      show={showM2}
      onHide={() => setShowM2(false)}
    />
  )
}
function Modal3() {
  const showM3 = useStore(state => state.showM3)
  const setShowM3 = useStore(state => state.setShowM3)

  return (
    <CustomModal 
      content={<p>Some content 3</p>}
      title="Other"
      show={showM3}
      onHide={() => setShowM3(false)}
    />
  )
}
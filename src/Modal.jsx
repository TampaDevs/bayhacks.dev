import React from 'react'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useStore } from './main.jsx'

export default function MyModal() {
  const showVideo = useStore(state => state.showVideo)
  const setShowVideo = useStore(state => state.setShowVideo)

  return (
    <Modal show={showVideo} onHide={() => setShowVideo(false)} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>2022 Hackathon</Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100">
          <iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/fEXdLheZW6k" title="Hackathon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowVideo(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

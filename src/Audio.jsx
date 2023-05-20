import React, {useState, useEffect} from 'react'
import { useStore } from './Main.jsx'

let turnedOnce = false
export default function AudioPlayer({file})  {
  const showScreen = useStore(state => state.showScreen)
  const playingAudio = useStore(state => state.playingAudio)
  const setPlayingAudio = useStore(state => state.setPlayingAudio)
  // const muted = useStore(state => state.muted)
  // const setMuted = useStore(state => state.setMuted)

  const [audio] = useState(new Audio(file))

  useEffect(() => {
    window.addEventListener("click", () => {
      if (!playingAudio && !turnedOnce) {
        turnedOnce = true
        setPlayingAudio(true)
      }
    })
  }, [])

  // useEffect(() => {
  //   if (turnedOnce && !muted) {
  //     setPlaying(!playing)
  //   }
  // }, [muted])

  // useEffect(() => {
  //   if (playingAudio && muted) {
  //     setPlaying(false)
  //   } else {
  //     if (turnedOnce) {
  //       setPlaying(true)
  //       playWavesAudio()
  //     }
  //   }
  // }, [muted])


  audio.volume = 0.1
  audio.loop = true

  useEffect(() => {
    // normally there is a skip on turning the audio on for box3
    // but the first page click audio goes around that
    if (playingAudio && showScreen === 'box3') {
      return
    }

    playingAudio ? audio.play() : audio.pause()
  }, [playingAudio, showScreen])

  return (
    <></>
  )
}
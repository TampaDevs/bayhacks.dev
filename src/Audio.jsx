import React, {useState, useEffect} from 'react'

export default function AudioPlayer(file)  {
  const [audio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  audio.volume = 0.1
  audio.loop = true

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
}
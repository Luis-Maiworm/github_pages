
import './App.css'
import { MainContent } from './components/MainContent'
import camino from './audio/mimi_camino.mp3'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

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
};

const GranCamino = () => {
  const [playing, toggle] = useAudio(camino);
  return(
    <>
      <header className='full-width'>
        <div className="audio-wrap">
          <h1>
            *#d/ Camino!
          </h1>
          <HiMiniSpeakerWave onClick={toggle}>{playing ? "Pause" : "Play"}</HiMiniSpeakerWave>
        </div>

        <h2>
          Berlin Edition
        </h2>
      </header>
    </>
  )
}



function App() {

  return (
    <>
      <div className='page-wrapper'>
        <div className='content-wrapper'>
        <GranCamino/>
        <MainContent/>
        </div>
      </div>
    </>
  )
}

export default App

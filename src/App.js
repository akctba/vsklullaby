import logo from './baby-face-icon.svg';
import './App.css';
import { useState, useRef } from 'react';

const tracks = [
  "Collection-for-Nursery",
  "Sleep-little-one",
  "Baby-Sleep-Songs",
  "Mozart-Lullabies",
  "rain1",
]

function App() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const handlePlay = (playingIndex) => {
    setCurrentPlaying(playingIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="wobble" alt="logo" />
      </header>
      <section>
          {tracks.map((track, i) => {
            return <Player 
              key={i} 
              trackNumber={i} 
              track={track}
              isPlaying={currentPlaying === i}
              onPlay={() => handlePlay(i)}
              onPause={() => setCurrentPlaying(null)}
            />
          })}
      </section>
      <footer>
          <p>VSK Lullaby for babies. No ads, no login, low light, no throuble. 2022</p>
          <div id='install-btn'></div>
      </footer>
    </div>
  );
}

function Player(props) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    props.onPlay();
  };

  const handlePause = () => {
    props.onPause();
  };

  // Stop this player if another one starts playing
  if (!props.isPlaying && audioRef.current && !audioRef.current.paused) {
    audioRef.current.pause();
  }

  return (
    <div className="player-box">
      <h2 className="track-title">{props.trackNumber+1} - {nameFix(props.track)}</h2>
      <audio 
        ref={audioRef}
        controls 
        loop 
        src={"/audio/"+props.track+".mp3"}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

function nameFix(name) {
  return name.replaceAll('-', ' ')
}

export default App;

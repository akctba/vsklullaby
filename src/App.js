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
  const audioRef = useRef(null);

  const handleTrackClick = (index) => {
    if (currentPlaying === index) {
      // If clicking the current track, pause it
      audioRef.current.pause();
      setCurrentPlaying(null);
    } else {
      // Play new track
      setCurrentPlaying(index);
      audioRef.current.src = `/audio/${tracks[index]}.mp3`;
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="wobble" alt="logo" />
      </header>
      <section className="tracks-list">
        {tracks.map((track, i) => (
          <div 
            key={i}
            className={`track-item ${currentPlaying === i ? 'playing' : ''}`}
            onClick={() => handleTrackClick(i)}
          >
            <span className="track-number">{i + 1}.</span>
            <span className="track-name">{nameFix(track)}</span>
          </div>
        ))}
        <audio 
          ref={audioRef}
          loop
          hidden
        />
      </section>
      <footer>
        <p>VSK Lullaby for babies. No ads, no login, low light, no throuble. 2022</p>
        <div id='install-btn'></div>
      </footer>
    </div>
  );
}

function nameFix(name) {
  return name.replaceAll('-', ' ');
}

export default App;

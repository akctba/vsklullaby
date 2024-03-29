import logo from './baby-face-icon.svg';
import './App.css';

const tracks = [
  "Collection-for-Nursery",
  "Sleep-little-one",
  "Baby-Sleep-Songs",
  "Mozart-Lullabies",
  "rain1",
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="wobble" alt="logo" />
      </header>
      <section>
          {tracks.map((track, i) => {
            return <Player key={i} trackNumber={i} track={track} />
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
  return (
    <div className="player-box">
      <h2 className="track-title">{props.trackNumber+1} - {nameFix(props.track)}</h2>
      <audio controls loop src={"/audio/"+props.track+".mp3"} >
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

function nameFix(name) {
  return name.replaceAll('-', ' ')
}

export default App;

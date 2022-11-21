import logo from './baby-face-icon.svg';
import './App.css';

const tracks = [
  "Sleep-little-one",
  "Baby-Sleep-Songs",
  "Collection-for-Nursery",
  "rain",
  "utero"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="wobble" alt="logo" />
      </header>
      <section>
          {tracks.map((track, i) => {
            return <Player key={i} track={track} />
          })}
      </section>
      <footer>
          <p>VSK Lullaby for babies. No ads, no login, low light, no throuble. 2022</p>
      </footer>
    </div>
  );
}

function Player(props) {
  return (
    <div className="player-box">
      <h2 className="track-title">{nameFix(props.track)}</h2>
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

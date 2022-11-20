import logo from './baby-face-icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="wobble" alt="logo" />

          <Player track="Sleep-little-one" />
          <Player track="Baby-Sleep-Songs" />
          <Player track="Collection-for-Nursery" />
          <Player track="rain" />
          <Player track="utero" />

      </header>
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

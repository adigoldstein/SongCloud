export default function Player(props) {


  const urlSong = `${props.currentSong.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  return (
    <div>

      <footer className="player">
        <img className="player-img" src={ props.currentSong.artwork_url } alt="Song thumbnail"/>
        <span className="song-name-player">{props.currentSong.title}</span>
        <audio className="audio-elem"
               controls={true}
               src={ urlSong }
               autoPlay>

        </audio>
      </footer>
    </div>
  )
}

// soundcloud personal id:
// 2t9loNQH90kzJcsFCODdigxfp325aq4z

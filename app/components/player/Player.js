import './player.scss';

import store from '../../store'
export default function Player(props) {

  const storeData =  store.getState();
  console.info(storeData);

  if (!storeData.currentTrack) {
    return <div className="playerShifted"></div>
  }

  const urlSong = `${storeData.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  return (
      <footer className="player">
        <img className="player-img" src={ props.currentSong.artwork_url } alt="Song thumbnail"/>
        <span className="song-name-player">{props.currentSong.title}</span>
        <audio className="audio-elem"
               controls={true}
               src={ urlSong }
               autoPlay>

        </audio>
      </footer>

  )
}

// soundcloud personal id:
// 2t9loNQH90kzJcsFCODdigxfp325aq4z

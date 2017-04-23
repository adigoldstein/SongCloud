import './player.scss';

import { connect } from 'react-redux';

import store from '../../store'
function Player(props) {

  const storeData =  store.getState();
  // console.info(storeData);

  if (!storeData.currentTrack) {
    return <div className="player Shifted"></div>
  }

  const urlSong = `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  return (
      <footer className="player">
        <img className="player-img" src={ props.currentTrack.artwork_url } alt="Song thumbnail"/>
        <span className="song-name-player">{props.currentTrack.title}</span>
        <audio className="audio-elem"
               controls={true}
               src={ urlSong }

               autoPlay>

        </audio>
      </footer>

  )
}
function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps)(Player);

// soundcloud personal id:
// 2t9loNQH90kzJcsFCODdigxfp325aq4z

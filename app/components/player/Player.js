import './player.scss';

import {connect} from 'react-redux';

import store from '../../store'
function Player(props) {

  const storeData = store.getState();

  if (!storeData.currentTrack) {

    return null
  }

  return (
    <footer className="player">
      <img className="player-img" src={  props.currentTrack.artwork_url } alt="Song thumbnail"/>
      <span className="song-name-player">{ props.currentTrack.title}</span>
      <audio className="audio-elem"
             controls={true}
             src={ `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z` }
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

// My soundcloud personal id:
// 2t9loNQH90kzJcsFCODdigxfp325aq4z

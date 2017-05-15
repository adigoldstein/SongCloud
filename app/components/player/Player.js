import './player.scss';
import {connect} from 'react-redux';
import store from '../../store'

class Player extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate(prevProps) {

    if (prevProps !== this.props) {
      if (this.props.currentTrack.isPlaying) {
        this.audio.play();
      } else {
        this.audio.pause();
      }

    }
  }


  render() {
    const props = this.props;
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
               onPlay={ () => this.props.onPlayHandler()}
               onPause={ () => this.props.onPauseHandler()}
               src={ `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z` }
               ref={(audio) => {
                 this.audio = audio
               } }
               autoPlay>

        </audio>
      </footer>

    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onPlayHandler() {
      return dispatch({
        type: 'TRACK_IS_PLAYING'
      })
    },
    onPauseHandler() {
      return dispatch({
        type: 'TRACK_IS_PAUSING'
      })
    }

    }
}
function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);


// My soundcloud personal id:
// 2t9loNQH90kzJcsFCODdigxfp325aq4z

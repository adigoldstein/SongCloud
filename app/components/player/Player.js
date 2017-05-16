import './player.scss';
import {connect} from 'react-redux';


class Player extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate() {

    if (this.props.currentTrack.isPlaying) {
      console.log('playing...');
      this.audio.play();
    } else {
      console.info(this.audio);
      console.log('pausing...');
      this.audio.pause();
    }

  }


  render() {

    if (!this.props.currentTrack.song) {

      return null
    }

    return (
      <footer className="player">
        <img className="player-img" src={  this.props.currentTrack.song.artwork_url } alt="Song thumbnail"/>
        <span className="song-name-player">{ this.props.currentTrack.song.title}</span>
        <audio className="audio-elem"
               controls={true}
               onPlay={ () => this.props.onPlayHandler()}
               onPause={ () => this.props.onPauseHandler()}
               src={ `${this.props.currentTrack.song.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z` }
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

import React from 'react';
import Song from '../song/Song';
import store from '../../store';
import { connect } from 'react-redux';



import './playlist.scss';


class Playlist extends React.Component {
  constructor() {
    super();
    this.toggleRename = this.toggleRename.bind(this);
    this.focus = this.focus.bind(this);


    this.state = {}
  }

  enterPressedInRename(e) {
    if (e.key === 'Enter') {
      this.props.updateTitle(this.props.playlist, this.textInput);
    }
  }

  componentDidUpdate() {
    if (this.textInput) {
      this.focus()
    }
  }

  componentDidMount() {
    if (this.textInput) {
      this.focus()
    }
  }

  focus() {
    this.textInput.focus();
  }

  toggleRename() {

    if (this.props.playlist.isInEditMode) {
      return <input type="text"
                    defaultValue={this.props.playlist.title}
                    className="name-playlist-input"
                    ref={(input) => {
                      this.textInput = input;
                    }}
                    onBlur={() => this.props.updateTitle(this.props.playlist, this.textInput)}
                    onKeyUp={(e) => this.enterPressedInRename(e) }
      />
    } else {
      return <h2 onClick={() => this.props.changeToEditmode(this.props.playlist)}>
        {this.props.playlist.title}
        <div className="playlist-length"><span className="length-num">{this.props.playlist.songs.length}</span></div>
      </h2>
    }


  }


  render() {

    return (
      <div key={this.props.playlist.id} className="each-playlist-container">
        <div className="playlists-bar">
          {this.toggleRename()}
          <button onClick={()=>this.props.deletePlaylist(this.props.index)} className="delete-btn">delete</button>
        </div>
        <div className="songs-display">
          <ul className="songs-ul">
            {this.props.playlist.songs.map((song) => {
                {/*console.info(song);*/
                }

                return <Song key={song.id}
                             song={song}
                             mode={'playlists'}
                             {...this.props}
                />
              }
            )}
          </ul>
        </div>
      </div>
    )


  }

}
function mapDispatchToProps(dispatch) {
  return {
    deletePlaylist(index){
      return dispatch({
        type:'DELETE_PLAYLIST',
        index: index
      })
    },
    updateTitle(playlistObj,input){
      return dispatch({
        type:'UPDATE_PLAYLIST_TITLE',
        playlistObj,
        input
      })
    }

  }
}
function mapStateToProps(stateData) {
  return {
    playlists: stateData.Playlists
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Playlist);

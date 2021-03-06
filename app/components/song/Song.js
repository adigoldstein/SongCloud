import React from 'react';

import './song.scss';
import {connect} from 'react-redux';


class song extends React.Component {
  constructor() {
    super();

    this.isSongInPlaylist = this.isSongInPlaylist.bind(this);
    this.createPlaylistAndNavToExplore = this.createPlaylistAndNavToExplore.bind(this);
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);

    this.state = {
      dropdownIsShown: false,
    }
  }

  checkboxChangeHandler(ev, playlist) {
    const chechbox = ev.target;

    this.props.addOrRemoveSongFromPlaylist(this.props.song, playlist, chechbox.checked)
  }

  isSongInPlaylist(playlist) {

    for (const song of playlist.songs) {
      if (song.id === this.props.song.id) {
        return true
      }
    }

    return false
  }

  isSongInAnyPlaylist() {

    for (const playlist of this.props.playlists) {
      for (const song of playlist.songs) {
        if (song.id === this.props.song.id) {
          return true;
        }
      }
    }
    return false;
  }


  createPlaylistAndNavToExplore() {
    this.props.createNewPlaylist(this.props.song);
    // Navigate to Playlists:
    this.props.history.push('/playlists');
  }

  heartIconDisplay() {
    if (this.isSongInAnyPlaylist()) {
      return <i className="heart-icon-full fa fa-heart" aria-hidden="true"> </i>

    } else {
      return <i className="heart-icon fa fa-heart-o" aria-hidden="true"> </i>
    }
  }

  dropDownElem() {
    return this.state.dropdownIsShown && <div className="song-dropdown">

        {this.playlistElemChooser()}

        {this.props.playlists.map((playlist) => {

          return <label key={playlist.id}>
            <input type="checkbox" checked={ this.isSongInPlaylist(playlist)}
                   onChange={(ev) => this.checkboxChangeHandler(ev, playlist)}/>
            {playlist.title}
          </label>
        })
        }


      </div>
  }

  toggleDisplay() {
    this.setState({dropdownIsShown: !this.state.dropdownIsShown})
  }

  playlistElemChooser() {

    if (this.props.mode === 'playlists') {
      return (<div>
        <h3>Edit Playlist</h3>
      </div>)
    } else {
      if (this.props.mode === 'explore') {
        return (<div>
          <h3>Add To Playlist</h3>
          <h4 onClick={ this.createPlaylistAndNavToExplore }>Create playlist +</h4>
        </div>)
      }
    }
  }


  render() {
    const minutes = Math.floor(parseInt(this.props.song.duration) / 60000);
    const seconds = ((parseInt(this.props.song.duration % 60000) / 1000).toFixed(0));
    const songDuration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    let artWork = this.props.song.artwork_url;
    if (artWork === null) {
      artWork = '';
    }
    return (

      <li className="songs-li" key={this.props.song.id} title={this.props.song.title}>
        <div>
          <img onClick={() => this.props.updateCurrentTrack(this.props.song)} src={artWork.replace('large', 't300x300')}
               alt="Song photo" className="song-img"/>
          <div className="song-title">{this.props.song.title}</div>
          <div className="song-duration">
            <i className="duration-icon fa fa-clock-o" aria-hidden="true"> </i>
            {songDuration}
            <div className="heart-container" onClick={() => this.toggleDisplay() }>
              {this.heartIconDisplay()}
              {this.dropDownElem()}

            </div>
          </div>

        </div>
      </li>
    )
  }

}
function mapDispatchToProps(dispatch) {
  return {
    updateCurrentTrack(song){
      return dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        song
      })
    },
    createNewPlaylist(song) {
      return dispatch({
        type: 'CREATE_NEW_PLAYLIST',
        song
      })
    },
    addOrRemoveSongFromPlaylist(song, playlist, addSong) {
      return dispatch({
        type: 'ADD_REMOVE_SONG_FROM_PLAYLIST',
        song,
        playlist,
        addSong
      })
    }
  }
}
function mapStateToProps(stateData) {
  return {
    playlists: stateData.Playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(song);

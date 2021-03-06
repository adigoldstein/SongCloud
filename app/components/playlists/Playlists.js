import React from 'react';
import Playlist from '../playlist/Playlist';
import {connect} from 'react-redux';
import store from '../../store'


import './playlists.scss';

class Playlists extends React.Component {
  constructor() {
    super();


    this.playlistsContent = this.playlistsContent.bind(this);

  }


  playlistsContent() {

    const storeData = store.getState();

    if (storeData.Playlists.length) {
      return storeData.Playlists.map((playlist, index) => {
        return <div key={playlist.id}>
          <Playlist playlist={playlist}
                    index={index}
                    {...this.props}
          />
        </div>
      })
    } else {
      return <div className="no-playlists-saved">Why don't you create some nice playlist?</div>
    }
  }


  render() {

    return (
      <div className="playlists-container">
        <div className="playlists-left">
          <div className="button-container">
            <button onClick={() => this.props.createNewPlaylist()} className="add-playlist-btn">Add new playlist
            </button>
          </div>

          <ul className="playlists-list">

            {this.props.playlists.map((playlist) => {
              return <li key={playlist.id} className="my-playlist">{playlist.title}</li>
            })}

          </ul>
        </div>
        <div className="playlists-right">

          {this.playlistsContent()}

        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewPlaylist(){
      return dispatch({
        type: 'CREATE_NEW_PLAYLIST',
      })
    }
  }
}

function mapStateToProps(stateData) {
  return {
    playlists: stateData.Playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

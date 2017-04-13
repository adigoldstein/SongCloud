import React from 'react';
import Playlist from '../playlist/Playlist';
import store from '../../store'



import './playlists.scss';

export default class Playlists extends React.Component {
  // console.info(props.data);
  constructor() {
    super();

    this.createNewPlaylist = this.createNewPlaylist.bind(this);
    this.playlistsContent = this.playlistsContent.bind(this);

    // this.state = {
    //   renameMode: false
    // }


  }

  createNewPlaylist() {

    this.props.Playlists();
    // this.setState({renameMode: true})
  }

  playlistsContent() {
    if (this.props.playlists.length) {
      return this.props.playlists.map((playlist, index) => {

        return <div key={playlist.id}>
          <Playlist playlist={playlist}
                    deletePlaylist={ this.props.deletePlaylist }
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
    const storeData =  store.getState()
    console.info(storeData);

    return (
      <div className="playlists-container">
        <div className="playlists-left">
          <div className="button-container">
            <button onClick={this.createNewPlaylist} className="add-playlist-btn">Add new playlist</button>
          </div>

          <ul className="playlists-list">

            }
            {this.props.playlists.map((playlist) => {
              {/*console.info(playlist);*/
              }
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

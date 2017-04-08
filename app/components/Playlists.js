import React from 'react';
import Playlist from './Playlist';


export default class Playlists extends React.Component {
  // console.info(props.data);
  constructor() {
    super();

    this.createNewPlaylist = this.createNewPlaylist.bind(this);

    this.state = {
      renameMode: false
    }


  }

  createNewPlaylist() {

    this.props.createPlaylist();
    this.setState({renameMode: true})
  }

  render() {


    return (
      <div className="playlists-container">
        <div className="playlists-left">
          <div className="button-container">
            <button onClick={this.createNewPlaylist} className="add-playlist-btn">Add new playlist</button>
          </div>

          <ul className="playlists-list">
            {this.props.playlists.map((playlist) => {
              {/*console.info(playlist);*/
              }
              return <li key={playlist.id} className="my-playlist">{playlist.title}</li>

            })}

          </ul>
        </div>
        <div className="playlists-right">
          {console.info('boooo', this.props.playlists.length)}
          {this.props.playlists.map((playlist, index) => {
            console.info(index);

            return <div key={playlist.id}>
              <Playlist playlist={playlist}
                        deletePlaylist={ this.props.deletePlaylist }
                        index={index}
                        renameMode={this.state.renameMode}
                        {...this.props}
              />
            </div>
          })
          }

        </div>
      </div>
    )
  }
}

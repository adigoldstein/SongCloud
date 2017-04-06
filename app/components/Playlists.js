import React from 'react';
import Playlist from './Playlist';


export default class Playlists extends React.Component {
  // console.info(props.data);
render () {



  return (
    <div className="playlists-container">
      <div className="playlists-left">
        <div className="button-container">
          <button onClick={this.props.createPlaylist} className="add-playlist-btn">Add new playlist</button>
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
        {this.props.playlists.map((playlist) => {
          return <div key={playlist.id}>
            <Playlist playlist={playlist}
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

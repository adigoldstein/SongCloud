import React from 'react';
import Song from './Song';

export default class Playlist extends React.Component {
  constructor() {
    super();

    // this.state = {}
  }


  render() {

    return (
      <div key={this.props.playlist.id} className="each-playlist-container">
        <div className="playlists-bar">
          <h2>{this.props.playlist.title}</h2>
          <button>delete</button>
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

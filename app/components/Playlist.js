import React from 'react';
import Song from './Song';

export default class Playlist extends React.Component {
  constructor() {
    super();
    this.toggleRename = this.toggleRename.bind(this);

    this.state = {}
  }

  toggleRename() {
    // console.info('length,', this.props.playlists.length);
    // console.info('bool', this.props.rename);
    // console.info('ind', this.props.index +1 );
    if (this.props.renameMode && this.props.index + 1 === this.props.playlists.length) {
      return <input type="text" className="nename-playlist-input"/>
    } else {
      return <h2>{this.props.playlist.title}
        <div className="playlist-length"><span className="length-num">{this.props.playlist.songs.length}</span></div>
      </h2>
    }


  }

  render() {
    // console.info(this.props.index);


    return (
      <div key={this.props.playlist.id} className="each-playlist-container">
        <div className="playlists-bar">
          {this.toggleRename()}
          <button onClick={() => this.props.deletePlaylist(this.props.index)} className="delete-btn">delete</button>
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

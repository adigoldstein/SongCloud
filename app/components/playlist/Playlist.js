import React from 'react';
import Song from '../song/Song';

import './playlist.scss';


export default class Playlist extends React.Component {
  constructor() {
    super();
    this.toggleRename = this.toggleRename.bind(this);
    this.focus = this.focus.bind(this);


    this.state = {}
  }

  enterPressedinRename(e) {
    console.info(e.key);
    if (e.key === 'Enter') {
      this.props.updatePlaylistTitle(this.props.playlist, this.textInput);
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
                    className="nename-playlist-input"
                    ref={(input) => {
                      this.textInput = input;
                    }}
                    onBlur={() => this.props.updatePlaylistTitle(this.props.playlist, this.textInput)}
                    onKeyUp={(e) => this.enterPressedinRename(e) }
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

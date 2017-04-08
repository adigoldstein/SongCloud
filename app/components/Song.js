import React from 'react';

export default class song extends React.Component {
  constructor() {
    super();
    this.createPlaylistMovetoExplore = this.createPlaylistMovetoExplore.bind(this)
    this.state = {
      dropdownIsShown : false
    }

  }

  dropDownElem () {
    return this.state.dropdownIsShown &&   <div className="song-dropdown">

      {this.playlistElemChooser()}

      {this.props.playlists.map((playlist) => {
        {/*console.info(playlist);*/}
        return <label key={playlist.id}>
          <input type="checkbox"/>
          {playlist.title}
        </label>
      })
      }


    </div>
  }
  createPlaylistMovetoExplore() {
    console.info(this.props);
    const from = 'song';
    this.props.createPlaylist(from , this.props.song);
    // ***************************************redirect to explore
  }

  toggleDisplay () {
    this.setState( {dropdownIsShown : !this.state.dropdownIsShown})
  }


  playlistElemChooser() {

    if (this.props.mode === 'playlists') {
      return(<div>
        <h3>Edit Playlist</h3>
        {/*<h4>Edit Playlists</h4>*/}
      </div>)
    } else {
      if (this.props.mode === 'explore') {
        return(<div>
          <h3>Add To Playlist</h3>
          <h4 onClick={ this.createPlaylistMovetoExplore}>Create playlist +</h4>
        </div>)
      }
    }
  }


  render() {

    // console.info(this.props);
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
          <img onClick={() => this.props.updateCurrentSong(this.props.song)} src={artWork.replace('large', 't300x300')}
               alt="Song photo" className="song-img"/>
          {/*<div style={{ backgroundImage: `url (" value.artwork_url.replace('large', 't300x300') ")` }}></div>*/}
          <div className="song-title">{this.props.song.title}</div>
          <div className="song-duration">
            <i className="duration-icon fa fa-clock-o" aria-hidden="true"> </i>
            {songDuration}
            <div className="heart-container">
              <i onClick={()=>  this.toggleDisplay() } className="heart-icon fa fa-heart-o" aria-hidden="true"> </i>
              {this.dropDownElem()}

            </div>
          </div>

        </div>
      </li>
    )
  }

}

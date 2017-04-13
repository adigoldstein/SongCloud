import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import uuid from 'uuid';

import  Topbar from  '../topbar/Topbar';
import  Explore from  '../explore/Explore';
import  Playlists from  '../playlists/Playlists';
import  Player from  '../player/Player';

import './root.scss';

export default class Root extends React.Component {
  constructor() {

    super();
    this.createPlaylist = this.createPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);
    this.changeToEditmode = this.changeToEditmode.bind(this);

    this.state = {
      currentSong: {},
      playlists: [
        {
          id: 123,
          isInEditMode: false,
          title: 'My Songs',
          songs: [{
            id: 250711755,
            title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
            duration: 219082,
            stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
            uri: "https://api.soundcloud.com/tracks/250711755",
            artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
          }

          ]
        },
        {
          id: 456,
          isInEditMode: false,
          title: 'Party Time',
          songs: [{
            id: 250711755,
            title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
            duration: 219082,
            stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
            uri: "https://api.soundcloud.com/tracks/250711755",
            artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
          }

          ]
        }
      ]
    }

  }

  changeToEditmode(playlistToEdit) {
    playlistToEdit.isInEditMode = true;
    const newPlaylist = [];
    this.state.playlists.map((playlist) => {
      if (playlistToEdit.id === playlist.id) {
        newPlaylist.push(playlistToEdit)
      } else {
        newPlaylist.push(playlist)
      }
    })
    this.setState({playlists: newPlaylist})
  }

  updatePlaylistTitle(playlistObj, inputElem) {
    const initTitle = playlistObj.title;
    console.info(initTitle);
    playlistObj.title = inputElem.value;
    if (playlistObj.title === '' || playlistObj.title === ' ') {
      playlistObj.title = initTitle;
    }
    playlistObj.isInEditMode = false;
    let newPlaylist = [];
    this.state.playlists.map((playlist) => {
      if (playlist.id === playlistObj.id) {

        newPlaylist.push(playlistObj);
      } else {
        newPlaylist.push(playlist);
      }
    })
    this.setState({playlists: newPlaylist})


  }

  deletePlaylist(index) {

    let newPlaylist = [];
    for (const i in this.state.playlists) {
      if (parseInt(i) !== index) {
        newPlaylist.push(this.state.playlists[i])
      }
    }


    // const newPlaylist = this.state.playlists.splice(index + 1, 1);

    console.info(newPlaylist);
    this.setState({playlists: newPlaylist})

  }

  createPlaylist(song) {
    const id = uuid();
    const newPlaylist = {
      id: id,
      title: 'My New Playlist',
      songs: [],
      isInEditMode: true
    };

    const newState = this.state.playlists.slice();
    newState.push(newPlaylist);
    if (song) {
      newPlaylist.songs.push(song)
    }

    this.setState({
      playlists: newState
    }, () => {
      if (song) {
        // Navigate to Playlists
        this.props.history.push('/playlists');
      }
    });
  }



  render() {

    return (
      <div className="main-root">
        <Topbar/>
        <Switch>
          <Route exact path="/" component={() =>
            <Redirect to="/explore"/>
          }/>
          <Route exact path="/explore" component={ () => <Redirect to="/explore/trance"/>
          }/>
          <Route path="/explore/:genre" render={ (props) => {
            return <Explore createPlaylist={ this.createPlaylist }
                            match={props.match}
                            playlists={this.state.playlists}
            />
          } }/>
          <Route path="/playlists" render={ () => {
            return <Playlists createPlaylist={ this.createPlaylist }
                              deletePlaylist={ this.deletePlaylist }
                              updatePlaylistTitle={ this.updatePlaylistTitle }
                              changeToEditmode={this.changeToEditmode }
                              playlists={ this.state.playlists}/>
          } }/>
        </Switch>
        <Player />
      </div>
    )
  }

}


import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import uuid from 'uuid';

import  Topbar from  './Topbar';
import  Explore from  './Explore';
import  Playlists from  './Playlists';
import  Player from  './Player';


export default class Root extends React.Component {
  constructor() {

    super();
    this.updateCurrentSong = this.updateCurrentSong.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);

    this.state = {
      currentSong: {},
      playlists: [
        {
          id: 123,
          title: 'My Playlist1',
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
          title: 'My Playlist2',
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

  deletePlaylist(index) {
    console.info('ran!!!!!!!');

    let newPlaylist = [];
    for (const i in this.state.playlists) {
      // console.info('index' , index, typeof index);
      // console.info('i' , i ,typeof i);
      if (parseInt(i) !== index) {
        newPlaylist.push(this.state.playlists[i])
      }
    }


    // const newPlaylist = this.state.playlists.splice(index + 1, 1);

    console.info(newPlaylist);
    this.setState({playlists: newPlaylist})

  }

  createPlaylist(from, song) {
    console.info(song);
    const id = uuid();
    const newPlaylist = {
      id: id,
      title: 'My New Playlist',
      songs: [
      ]
    };
    const newState = this.state.playlists.slice();
    newState.push(newPlaylist);
    console.info(newPlaylist);
    if (from) {
      newPlaylist.songs.push(song)
    }
    this.setState({playlists: newState})
  }

  updateCurrentSong(song) {


    const songRecived = Object.assign({}, song);

    this.setState({currentSong: songRecived})
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
            return <Explore updateCurrentSong={ this.updateCurrentSong }
                            createPlaylist={ this.createPlaylist }
                            match={props.match}
                            playlists={this.state.playlists}
            />
          } }/>
          <Route path="/playlists" render={ () => {
            return <Playlists updateCurrentSong={ this.updateCurrentSong }
                              createPlaylist={ this.createPlaylist }
                              deletePlaylist={ this.deletePlaylist }
                              playlists={ this.state.playlists}/>
          } }/>
        </Switch>
        <Player currentSong={ this.state.currentSong }/>
      </div>
    )
  }

}


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
                            match={props.match}
                            playlists={this.state.playlists}
            />
          } }/>
          <Route path="/playlists" render={ () => {
            return <Playlists updateCurrentSong={ this.updateCurrentSong }
                              playlists={ this.state.playlists}/>
          } }/>
        </Switch>
        <Player currentSong={ this.state.currentSong }/>
      </div>
    )
  }

}


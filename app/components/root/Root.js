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





    // this.state = {
    //   currentSong: {},
    //   playlists: [
    //     {
    //       id: 123,
    //       isInEditMode: false,
    //       title: 'Old Data1',
    //       songs: [{
    //         id: 250711755,
    //         title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
    //         duration: 219082,
    //         stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
    //         uri: "https://api.soundcloud.com/tracks/250711755",
    //         artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
    //       }
    //
    //       ]
    //     },
    //     {
    //       id: 456,
    //       isInEditMode: false,
    //       title: 'Old Data2',
    //       songs: [{
    //         id: 250711755,
    //         title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
    //         duration: 219082,
    //         stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
    //         uri: "https://api.soundcloud.com/tracks/250711755",
    //         artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
    //       }
    //
    //       ]
    //     }
    //   ]
    // }

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
            return <Explore match={props.match}
            />
          } }/>

          <Route path="/playlists" render={ () => {
            return <Playlists changeToEditmode={this.changeToEditmode }

            />
          } }/>
        </Switch>
        <Player />
      </div>
    )
  }

}


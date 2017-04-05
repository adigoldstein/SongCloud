import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

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
      playlists : [
        {id: 123,
        title: 'My Playlist1',
        songs: [

        ]},
        {id: 456,
          title: 'My Playlist2',
          songs: [

          ]}
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
                            match={props.match}/>
          } }/>
          <Route path="/playlists" render={ () => {
            return <Playlists data={ this.state.playlists}/>
          } }/>
        </Switch>
        <Player currentSong={ this.state.currentSong }/>
      </div>
    )
  }

}


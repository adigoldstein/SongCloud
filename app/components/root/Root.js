import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import  Topbar from  '../topbar/Topbar';
import  Explore from  '../explore/Explore';
import  Playlists from  '../playlists/Playlists';
import  Player from  '../player/Player';

export default class Root extends React.Component {
  constructor() {
    super();
  }


  render() {

    return (
      <div className="main-root">
        <Topbar history={this.props.history}/>
        <Switch>
          <Route exact path="/" component={() =>
            <Redirect to="/explore"/>
          }/>

          <Route exact path="/explore" component={ () => <Redirect to="/explore/trance"/>
          }/>

          <Route path="/explore/:genre" render={ (props) => {
            return <Explore match={props.match}
                            history={props.history}
            />
          } }/>

          <Route path="/playlists" render={ () => {
            return <Playlists
            />
          } }/>
        </Switch>
        <Player />
      </div>
    )
  }

}


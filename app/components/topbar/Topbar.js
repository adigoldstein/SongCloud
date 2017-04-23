import React from 'react';
import {NavLink } from 'react-router-dom';

import './topbar.scss';
export default class Topbar extends React.Component {
  constructor() {
    super();
  }
  inputChangeHandler(e) {
    if (e.key === 'Enter' && this.textInput.value !== '' ) {
      console.info(this.textInput.value);

      this.props.history.push(`/explore/${this.textInput.value}?search=true`);
    }

  }

  render() {
    return (
      <nav className="navbar">

        <div className="leftnav">
          <a href="/"><i className="nav-cloud cloud-fa fa fa-mixcloud  " aria-hidden="true"></i></a>
          <span className="nav-title">SongCloud</span>
          <ul>
            <li><NavLink to="/explore" activeClassName="selected">Explore</NavLink></li>
            <li><NavLink to="/playlists" activeClassName="selected">Playlists</NavLink></li>
          </ul>
        </div>

        <div className="rightnav">
          <div className="input-container">
            <i className="search-icon fa fa-search" aria-hidden="true"></i>

            <input className="search-input"
                   type="text"
                   placeholder="SEARCH"
                   ref={(input) => {
                     this.textInput = input;}}
                   onKeyUp={(e) => {this.inputChangeHandler(e)}}/>
          </div>
          <button className="sign-out-btn"><a href="#">Logout</a></button>
        </div>

      </nav>
    )


  }
}

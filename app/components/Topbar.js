import {NavLink} from 'react-router-dom';

export default function Topbar() {

  return (
    <div>
      <nav className="navbar">

        <div className="leftnav">
          <a href="/"><i className="nav-cloud cloud-fa fa fa-mixcloud  " aria-hidden="true"></i></a>
          <span className="nav-title">SongCloud</span>
          <ul>
            <li><NavLink to="/explore"  activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/playlists" activeClassName="selected">Playlists</NavLink></li>
          </ul>
        </div>

        <div className="rightnav">
          <div className="input-container">
            <i className="search-icon fa fa-search" aria-hidden="true"></i>

            <input className="search-input" type="text" placeholder="SEARCH"/>
          </div>
          <button className="sign-out-btn"><a href="#">Logout</a></button>
        </div>

      </nav>
    </div>
  )
}

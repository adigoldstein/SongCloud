import React from 'react';
import {NavLink} from 'react-router-dom';
import Song from '../song/Song';

import './explore.scss';

export default class Explore extends React.Component {
  constructor() {
    super();


    this.state = {
      songs: [],
      songsLoading: 'loading',
      offset: 0,
      limit: 15
    }
  }

  GetXhr() {


    const searchPath = this.props.history.location.pathname;
    const searchstring = searchPath.replace('/explore/','');
    let beforeSearch;
    let genre;
    if (this.props.history.location.search === "") {
       beforeSearch = 'tags';
      genre = this.props.match.params.genre;
    }else {
       beforeSearch = 'q';
       genre = searchstring;
    }



    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${this.state.limit}&offset=${this.state.offset}&${beforeSearch}=${genre}`);

    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }

  componentDidMount() {
    this.GetXhr();
  }

  componentDidUpdate(prevProps, prevState) {

    //if genre changed
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.setState({offset: 0 , songsLoading: 'loading'}, () => {
        this.GetXhr();
      });
    }

    //if next page of prev page clicked
    if (prevState.offset !== this.state.offset) {
      this.GetXhr();
    }
  }


  nextPage() {
    this.setState(
      {offset: this.state.offset + this.state.limit , songsLoading: 'loading'}
    )

  }

  prevPage() {
    this.setState(
      {offset: this.state.offset - this.state.limit , songsLoading: 'loading'}
    )
  }


  crateSongs() {

    return (
      <ul className="songs-ul">
        {this.state.songs.map((song) => {
            return <Song key={song.id}
                         song={song}
                         mode={'explore'}
                         {...this.props}
            />
          }
        )}
      </ul>
    )
  }

  render() {

    switch (this.state.songsLoading) {
      case 'loading':
        return <div className="explore-loading-container">
          <i className="explore-loading fa fa-refresh fast-spin fa-3x fa-fw"></i>
        </div>;
      case 'error':
        return <div className="error">Error!</div>;
      case 'loaded':
        return (
          <div className="expore-div">
            <div className="genres-bar">
              <h2>Genres: </h2>
              <ul className="categories-menu">
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/trance"} >Trance</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/dubstep"}>Dubstep</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/house"}>House</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/techno"}>Techno</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/pop"}>Pop</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/indie"}>Indie</NavLink></li>
                <li className="genre"><NavLink activeClassName="genre-selected" to={"/explore/reggaeton"}>Reggaeton</NavLink></li>
              </ul>
            </div>

            <div className="songs-and-pagination">
              {this.crateSongs()}


              <div className="pagination">
                <button onClick={ this.prevPage.bind(this)} className="previous-btn pagination-btn"
                        disabled={this.state.offset === 0}>previous
                </button>
                <div className="pagination-div">
                  <span className="pagination-span">Page {this.state.offset / this.state.limit + 1}</span>
                </div>
                <button onClick={ this.nextPage.bind(this)} className="next-btn pagination-btn">Next</button>
              </div>
            </div>

          </div>
        )
    }
  }

}


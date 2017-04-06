import React from 'react';
import {NavLink} from 'react-router-dom';
import Song from './Song';


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

    const genre = this.props.match.params.genre;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${this.state.limit}&offset=${this.state.offset}&tags=${genre}`);

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
      this.setState({offset: 0}, () => {
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
      {offset: this.state.offset + this.state.limit}
    )

  }

  prevPage() {
    this.setState(
      {offset: this.state.offset - this.state.limit}
    )
  }


  crateSongs() {
    // console.info(this.props);

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
    console.info(this.props);

    switch (this.state.songsLoading) {
      case 'loading':
        return <div className="explore-loading-container">
          <i className="explore-loading fa fa-refresh fa-spin fa-3x fa-fw"></i>
        </div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':
        return (
          <div>
            <div className="genres-bar">
              <h2>Genres: </h2>
              <ul className="categories-menu">
                <li className="genre"><NavLink to={"/explore/trance"}>Trance</NavLink></li>
                <li className="genre"><NavLink to={"/explore/dubstep"}>Dubstep</NavLink></li>
                <li className="genre"><NavLink to={"/explore/house"}>House</NavLink></li>
                <li className="genre"><NavLink to={"/explore/techno"}>Techno</NavLink></li>
                <li className="genre"><NavLink to={"/explore/pop"}>Pop</NavLink></li>
                <li className="genre"><NavLink to={"/explore/indie"}>Indie</NavLink></li>
                <li className="genre"><NavLink to={"/explore/reggaeton"}>Reggaeton</NavLink></li>
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

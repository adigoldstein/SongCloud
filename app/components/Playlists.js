import React from 'react';
import Song from './Song';


export default function Playlists(props) {
  // console.info(props.data);

  return (
    <div className="playlists-container">
      <div className="playlists-left">
        <div className="button-container">
          <button className="add-playlist-btn">Add new playlist</button>
        </div>

        <ul className="playlists-list">
          {props.playlists.map((playlist) => {
            console.info(playlist);
            return <li key={playlist.id} className="my-playlist">{playlist.title}</li>

          })}

        </ul>
      </div>
      <div className="playlists-right">
        {props.playlists.map((playlist) => {
          {/*console.info(playlist);*/}
          return (
            <div key={playlist.id} className="each-playlist-container">
              <div className="playlists-bar">
                <h2>{playlist.title}</h2>
                <button>delete</button>
              </div>
              <div className="songs-display">

                *****************song comp will run here
                {playlist.songs.map((song) => {
                    {/*console.info(song);*/}

                    return <Song key={song.id}
                                 song={song}
                                 {...props}
                    />
                  }
                )}
              </div>
            </div>
          )
        })}
        <div className="playlists-bar">
          <h2>My songs</h2>
          <button>delete</button>
        </div>
      </div>
    </div>
  )
}

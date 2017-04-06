import React from 'react';
import Playlist from './Playlist';


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
            {/*console.info(playlist);*/
            }
            return <li key={playlist.id} className="my-playlist">{playlist.title}</li>

          })}

        </ul>
      </div>
      <div className="playlists-right">
        {props.playlists.map((playlist) => {
          return <div key={playlist.id}>
            <Playlist playlist={playlist}
                      {...props}
            />
          </div>
        })
        }

      </div>
    </div>
  )
}

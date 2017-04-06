import React from 'react';

export default function song(props) {
  console.info(props);
  const minutes = Math.floor(parseInt(props.song.duration) / 60000);
  const seconds = ((parseInt(props.song.duration % 60000) / 1000).toFixed(0));
  const songDuration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

  let artWork = props.song.artwork_url;
  if (artWork === null) {
    artWork = '';

  }

  function playlistElemChooser() {


    if (props.mode === 'explore') {
      return  <h4>Edit Playlists</h4>
    } else {
      if (props.mode === 'playlists') {
        return <h4>Create playlist +</h4>
      }
    }
  }



  return <li className="songs-li" key={props.song.id} title={props.song.title}>
    <div>
      <img onClick={() => props.updateCurrentSong(props.song)} src={artWork.replace('large', 't300x300')}
           alt="Song photo" className="song-img"/>
      {/*<div style={{ backgroundImage: `url (" value.artwork_url.replace('large', 't300x300') ")` }}></div>*/}
      <div className="song-title">{props.song.title}</div>
      <div className="song-duration">
        <i className="duration-icon fa fa-clock-o" aria-hidden="true"> </i>
        {songDuration}
        <div className="heart-container">
          <i className="heart-icon fa fa-heart-o" aria-hidden="true"> </i>
          <div className="song-dropdown">

            <h3>Edit Playlist</h3>
            {playlistElemChooser()}

            {props.playlists.map((playlist) => {
              {/*console.info(playlist);*/}
              return <label key={playlist.id}>
                <input  type="checkbox"/>
                {playlist.title}
              </label>
            })

            }


          </div>
        </div>
      </div>

    </div>
  </li>
}

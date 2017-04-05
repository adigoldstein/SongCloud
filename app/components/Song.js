import React from 'react';

export default function song(props) {
  const minutes = Math.floor(parseInt(props.data.duration) / 60000);
  const seconds = ((parseInt(props.data.duration % 60000) / 1000).toFixed(0));
  const songDuration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

  let artWork = props.data.artwork_url;
  if (artWork === null) {
    artWork = '';
  }
  return <li className="songs-li" key={props.data.id} title={props.data.title}>
    <div>
      <img onClick={() => props.updateCurrentSong(props.data)} src={artWork.replace('large', 't300x300')}
           alt="Song photo" className="song-img"/>
      {/*<div style={{ backgroundImage: `url (" value.artwork_url.replace('large', 't300x300') ")` }}></div>*/}
      <div className="song-title">{props.data.title}</div>
      <div className="song-duration">
        <i className="duration-icon fa fa-clock-o" aria-hidden="true"> </i>
        {songDuration}
        <div className="heart-container">
          <i className="heart-icon fa fa-heart-o" aria-hidden="true"> </i>
          <div className="song-dropdown">
            <h3>Edit Playlist</h3>
            <h4>Create playlist +</h4>

            {/********************checkboxes here!*/}
          </div>
        </div>
      </div>

    </div>
  </li>
}

import uuid from 'uuid';
const dummyData = [
  {
    id: 123,
    isInEditMode: false,
    title: 'My Songs',
    songs: [{
      id: 250711755,
      title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
      duration: 219082,
      stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
      uri: "https://api.soundcloud.com/tracks/250711755",
      artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
    }

    ]
  },
  {
    id: 456,
    isInEditMode: false,
    title: 'Party Time',
    songs: [{
      id: 250711755,
      title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
      duration: 219082,
      stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
      uri: "https://api.soundcloud.com/tracks/250711755",
      artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
    }

    ]
  }

];
export default function PlaylistReducer(playlists = dummyData, action) {
  if (action.type === 'CREATE_NEW_PLAYLIST') {
    console.info(action.song, action);
    const id = uuid();
    const newPlaylist = {
      id: id,
      title: 'My New Playlist',
      songs: [],
      isInEditMode: true
    };

    const newState = playlists;
    newState.push(newPlaylist);
    if (action.song) {
      newPlaylist.songs.push(action.song)
    }


  }
  ;
  return playlists

  if (song) {
    // Navigate to Playlists*******************************************
    this.props.history.push('/playlists');
  }
}


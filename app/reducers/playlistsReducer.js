import uuid from 'uuid';
const dummyData = [
  {
    id: 123,
    isInEditMode: false,
    title: 'Redux My Songs',
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
    title: 'Redux Party Time',
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
    // console.info(action.song, action);
    let copyOfPlaylists = [...playlists];
    const id = uuid();
    const newPlaylist = {
      id: id,
      title: 'My New Playlist',
      songs: [],
      isInEditMode: true
    };
    if (action.song) {
      newPlaylist.songs.push(action.song)
    }

    copyOfPlaylists.push(newPlaylist);
    // console.info(copyOfPlaylists, 'playlistdata after adding');


    return copyOfPlaylists;
  }

  if (action.type === 'DELETE_PLAYLIST') {
    // console.info(playlists);
    let newPlaylist = [];
    for (const i in playlists) {
      if (parseInt(i) !== action.index) {
        newPlaylist.push(playlists[i])
      }
    }

    return newPlaylist
  }
  if (action.type === 'CHANGE_TO_EDIT_MODE') {


    action.playlistToEdit.isInEditMode = true;
    const newPlaylist = [];
    playlists.map((playlist) => {
      if (action.playlistToEdit.id === playlist.id) {
        newPlaylist.push(action.playlistToEdit)
      } else {
        newPlaylist.push(playlist)
      }
    })
    return newPlaylist
  }


  if (action.type === 'UPDATE_PLAYLIST_TITLE') {
    console.info(action);
    const initTitle = action.playlistObj.title;
    console.info(initTitle);
    action.playlistObj.title = action.input.value;
    if (action.playlistObj.title === '' || action.playlistObj.title === ' ') {
      action.playlistObj.title = initTitle;
    }
    action.playlistObj.isInEditMode = false;
    let newPlaylist = [];
    playlists.map((playlist) => {
      if (playlist.id === action.playlistObj.id) {

        newPlaylist.push(action.playlistObj);
      } else {
        newPlaylist.push(playlist);
      }
    })
    console.info(newPlaylist);
    return newPlaylist
  }
  if (action.type === 'ADD_REMOVE_SONG_FROM_PLAYLIST') {

    let copyOfPlaylists = [];
    playlists.map((playlist) => {
      if (playlist.id === action.playlist.id) {

        if (action.addSong) {
          //  Checkbox checked, need to add song
          playlist.songs.push(action.song);
          copyOfPlaylists.push(playlist);


        } else {
          //Remove song from playlist
        // ***********************************
        }
      } else {
        copyOfPlaylists.push(playlist);
      }


    })

    return copyOfPlaylists
  }

  return playlists;


}

export default function currentTrackReducer(currentTrack = {song: null, isPlaying: false}, action) {

  if (action.type === 'UPDATE_CURRENT_TRACK') {
    if (currentTrack) {console.info('update current track', currentTrack.isPlaying);}
    let copyOfCurrentTrack= {};
    copyOfCurrentTrack.song = Object.assign({}, action.song);
    copyOfCurrentTrack.isPlaying = true;

    return copyOfCurrentTrack;
  }


  if (action.type === 'CHANGE_IS_PLAYING') {
console.info('changeisplaying');
    let copyOfCurrentTrack = Object.assign({},currentTrack, {isPlaying: !currentTrack.isPlaying});
    return copyOfCurrentTrack;
  }


  if (action.type === 'TRACK_IS_PLAYING') {
    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = true;


    return copyOfCurrentTrack
  }

  if (action.type === 'TRACK_IS_PAUSING') {
    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = false;


    return copyOfCurrentTrack
  }

  return currentTrack;
}


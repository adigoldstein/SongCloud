export default function currentTrackReducer(currentTrack = null, action) {

  if (action.type === 'UPDATE_CURRENT_TRACK') {

    return action.song;
  }
  ;

  if (action.type === 'CHANGE_IS_PLAYING') {

    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = !copyOfCurrentTrack.isPlaying;
    return copyOfCurrentTrack;
  }
  ;

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
if (currentTrack) { console.info('is playing state', currentTrack); }
  return currentTrack;
}


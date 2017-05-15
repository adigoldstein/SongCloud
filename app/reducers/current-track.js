export default function currentTrackReducer(currentTrack = null, action) {

  if (action.type === 'UPDATE_CURRENT_TRACK') {
    if (currentTrack) {console.info('update current track', currentTrack.isPlaying);}


    return action.song;
  }
  ;

  if (action.type === 'CHANGE_IS_PLAYING') {

    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = !copyOfCurrentTrack.isPlaying;
    if (currentTrack) {console.info('change is playing', currentTrack.isPlaying);}

    return copyOfCurrentTrack;
  }
  ;

  if (action.type === 'TRACK_IS_PLAYING') {
    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = true;
    if (currentTrack) {console.info('track is playing', currentTrack.isPlaying);}

    return copyOfCurrentTrack
  }
  if (action.type === 'TRACK_IS_PAUSING') {
    let copyOfCurrentTrack = Object.assign({}, currentTrack);
    copyOfCurrentTrack.isPlaying = false;
    if (currentTrack) {console.info('track is pausing',currentTrack.isPlaying);}

    return copyOfCurrentTrack
  }
  return currentTrack;
}


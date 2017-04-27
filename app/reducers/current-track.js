export default function currentTrackReducer(currentTrack = null, action) {

console.info('curretrack');
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    return action.song;
  }

  return currentTrack;
}


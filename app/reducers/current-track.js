export default function currentTrackReducer(currentTrack = null, action) {

console.info('curretrack');
console.info(action.song);
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    return action.song;
  }

  return currentTrack;
}

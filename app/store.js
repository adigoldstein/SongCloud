import { createStore, combineReducers } from 'redux';


import Playlists from './reducers/playlistsReducer';
import currentTrack from './reducers/current-track';



const reducer = combineReducers({
  Playlists,
  currentTrack
});

const store = createStore(reducer);

export default store;

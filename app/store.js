import { createStore, combineReducers } from 'redux';


import currentTrack from './reducers/current-track';



const reducer = combineReducers({

  currentTrack
});

const store = createStore(reducer);

export default store;

import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store'

import Route from './components/routes/Routes';

function renderApp() {

  ReactDOM.render(
    <Route/>,
    document.querySelector('#root')
  );
}


renderApp();

store.subscribe( ()=> {
  renderApp();
})

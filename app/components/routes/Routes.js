import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import  Signup from  '../signup/Signup';
import  Signin from  '../signin/Signin';
import Root from '../root/Root';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={ Signin }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route path="/" component={ Root }/>
      </Switch>
    </BrowserRouter>
  )

}

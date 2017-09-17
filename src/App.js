import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import DateForm from './DateForm';
import Results from './Results';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={DateForm}></Route>
        <Route exact path='/results' component={Results}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

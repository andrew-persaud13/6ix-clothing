import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shoppage/shoppage.component'

import './App.css';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
        </Switch>
    </div>
  );
}

export default App;

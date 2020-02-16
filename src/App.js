import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignUpIn from './pages/signin/sign-up-in.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubFromAuth = null;

  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignUpIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user-actions';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignUpIn from './pages/signin/sign-up-in.component';

import './App.css';

class App extends React.Component {
  unsubFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignUpIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);

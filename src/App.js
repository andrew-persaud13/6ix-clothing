import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user.selector';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignUpIn from './pages/signin/sign-up-in.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';

class App extends React.Component {
  unsubFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // componentWillUnmount() {
  //   this.unsubFromAuth();
  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpIn />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component.jsx';
import './sign-up-in.styles.scss';

const SignUpIn = () => (
  <div className="sign-in-and-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignUpIn;

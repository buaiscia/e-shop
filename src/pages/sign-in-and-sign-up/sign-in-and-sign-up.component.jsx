import React from 'react';

import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignInForm />
        <SignUpForm />
    </div>
)

export default SignInAndSignUpPage;
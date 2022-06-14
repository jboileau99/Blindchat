import { Outlet } from 'react-router-dom'
import './sign-in.scss'

import SignUpForm from "../../sign-up-form/sign-up-form";
import {useState} from "react";
import SignInForm from "../../sign-in-form/sign-in-form";

const AUTH_MODES = {
  LOGIN: 0,
  SIGNUP: 1
}

const SignIn = () => {

  const [authMode, setAuthMode] = useState(AUTH_MODES.LOGIN)

  return (
    <div>
      <a onClick={() => setAuthMode(AUTH_MODES.LOGIN)}>Login</a> |
      <a onClick={() => setAuthMode(AUTH_MODES.SIGNUP)}>Signup</a>
      {
        authMode === AUTH_MODES.LOGIN ?
          <SignInForm/> : <SignUpForm/>
      }
      <Outlet/>
    </div>
  )
}

export default SignIn
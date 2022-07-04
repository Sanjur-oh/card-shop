// made login page on the profile page

import React from "react";
import {useDispatch} from "react-redux"
import {login, logout} from '../features/user'
// import { BrowserRouter as Router } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            dispatch(login({ username: "mikey", email: "", address: "" }));
          }}>Login
          </button>

          <button onClick={() => {
            dispatch(logout());
          }}>Logout</button>
      </header>
    </div>
  );
}

export default Login;
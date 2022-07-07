// made login page on the profile page
// this login was made in redux tutorial

import React from "react";
import {useDispatch} from "react-redux"
import {login, logout} from '../features/user'


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

          <button  onClick={() => {
            dispatch(logout());
          }}>Logout</button>
      </header>
    </div>
  );
}

export default Login;
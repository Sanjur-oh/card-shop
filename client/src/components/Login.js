// made login page on the profile page
// this login was made in redux tutorial

import React from "react";
import {useDispatch} from "react-redux"
// import {login, logout} from '../features/userSlice'


function Login() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button className="nav-button"
          onClick={() => {
            // dispatch(login({ username: "mikey", email: "", address: "" }));
            // dispatch(login({username: {user.username}, email: {user.email}, name: {user.name}}));
          }}>Login
          </button>

          <button className="nav-button" onClick={() => {
            // dispatch(logout());
          }}>Logout</button>
      </header>
    </div>
  );
}

export default Login;
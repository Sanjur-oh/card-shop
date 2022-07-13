// made login page on the profile page
// this login was made in redux tutorial
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchUsers} from '../features/userSlice'
// import {fetchUser} from '../features/userSlice'
// useEffect,

function Login({ user, setUser, setIsAuthenticated, setLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const navigate = useNavigate();
  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("yo");
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
          setLoggedIn(true);
          navigate("/");
          // \/ not good practice \/
          // refreshPage();
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }



  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user)
  //       const dispatch = useDispatch()
  //       useEffect(() => {
  //           dispatch(fetchUser())
  //       }, [])

    // console.log("Logged in?", loggedIn)
    // console.log("User:", user)

  return (
    <div align="center" style={{ height: "100%" }}>
      {user ? 
        <h2
          style={{
            color: "black",
            lineHeight: 0.5,
            padding: 1,
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >{`${user.name} is logged in`}</h2>
       : 
        // <p >{loggedIn ? `${user.name} logged in` : "Not logged in"}</p>
        <form className="form-container" onSubmit={handleLoginSubmit}>
          <h1 className="form-name">Please login below.</h1>
          <br></br>
          <div className="inputs">
            <label>Username </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="form-button">Login</button>
          </div>
          <br></br>
          <label
            style={{ fontSize: "20px", padding: "0px" }}
            disabled={!username || !password}
          >{" "}Don't have an account?{" "}
          </label>
          <Link to="/create_user"><button className="form-button">Sign Up</button></Link>
          <br></br>
          <br></br>
          <label
            style={{ fontSize: "20px", padding: "0px" }}
            disabled={!username || !password}
          />
          {/* <Link to="/password/reset">Forgot your password?</Link> */}
          <a href="/password/reset"><button className="button">Forgot your password?</button></a>
          {error ? <div>{error}</div> : null}
        </form>
      }
    </div>
  );
}

export default Login;

// <div className="App">
//       <header className="App-header">
//         <button className="nav-button"
//           onClick={() => {
//             dispatch(login({ username: "mikey", email: "", address: "" }));
//             // dispatch(login({username: {user.username}, email: {user.email}, name: {user.name}}));
//           }}>Login
//           </button>

//           <button className="nav-button" onClick={() => {
//             dispatch(logout());
//           }}>Logout</button>
//       </header>
//     </div>

// <div className="App">
//     <header className="App-header">
//       <h1>Welcome Back</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username: </label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label> Password: </label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <button className="nav-button">Sign In</button>
//         </div>
//       </form>

//     </header>
//     {error ? <div>{error}</div> : null}
//   </div>

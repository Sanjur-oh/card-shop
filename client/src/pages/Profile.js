// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {login, logout} from '../features/user'

function Profile() {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch();
    // const [{ data: user, error, status }, setUser] = useState({
    //   data: null,
    //   error: null,
    //   status: "pending",
    // });
    // const { id } = useParams();

    // useEffect(() => {
    //     fetch(`/users/${id}`).then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) =>
    //           setUser({ data: user, error: null, status: "resolved" })
    //         );
    //       } else {
    //         r.json().then((err) =>
    //           setUser({ data: null, error: err.error, status: "rejected" })
    //         );
    //       }
    //     });
    //   }, [id]);



    // if (status === "pending") return <div>"hol up"</div>;
    // if (status === "rejected") return <h1>Error: {error.error}</h1>;



    return (
        <div className="App">
            <header className="App-header">
                <h1>Profile Page</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>

            <button
          onClick={() => {
            dispatch(login({ username: "mikey", email: "", address: "" }));
          }}>Login
          </button>

          <button onClick={() => {
            dispatch(logout());
          }}>Logout
          </button>

            </header>
        </div>

        
        
      
    );
}

export default Profile;



    // <section>
    //     <h2>{user.username}</h2>
    //     <h2>{user.email}</h2>
    //     {/* <button onClick={() => handleDeleteActivity(user.id)}>Delete Account?</button> */}
    //     {/* <button onClick={() => handleDeleteActivity(user.id)}>Update Password</button> */}
    //     {/* <Link onClick={() => handleDeleteActivity(user.id)}>Delete Account?</Link> */}
    //   </section>
    //  </div>
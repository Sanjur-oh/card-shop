import React, { useEffect, useState } from "react";
import  { Link, useParams } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchShoes} from '../features/shoeSlice'

function Profile() {
  // const user = useSelector((state) => state.user)
  const [{ data: user, error, status }, setUser] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  function refreshPage() {
    window.location.reload(false);
  }

  // const shoe = useSelector((state) => state.shoe);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchShoes());
  // }, []);

  useEffect(() => {
    fetch(`/users/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((user) =>
          setUser({ data: user, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setUser({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleDeleteActivity(id) {
    fetch(`/users/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser((users) => {
          users.filter((user) => user.id !== id);
        });
        refreshPage();
      }
    });
  }

  if (status === "pending") return <div>"hol up"</div>;
  if (status === "rejected") return <h1>Please Login</h1>;

  return (
    <div>
      <h1>Welcome back, {user.username}</h1>
      <h2>Email: {user.email}</h2>
    
      <ul>
         {user.shoes.map((shoe, i) => (
            <div key={i}>
                <h2> Collection: </h2>
                <div >{shoe.shoeName}</div>
                <img src={shoe.image_url} alt={shoe.name} className="image" />
            </div>          
          ))}
      </ul>
      <button onClick={() => handleDeleteActivity(user.id)}>Delete Account?</button>
      <button><Link to="/user_shoes/new">Add Shoe To Collection</Link></button>
      {/* <button onClick={() => handleDeleteActivity(user.password)}>Update Password</button> */}
      {/* <Link onClick={() => handleDeleteActivity(user.id)}>Delete Account?</Link> */}
    </div>
  );
}

export default Profile;



// <div>
//     <h1>Profile Page</h1>
//     {user.loading && <div>Loading...</div>}
//     {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
//         <ul>
//             {user.users.map((user) => (
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
// </div>

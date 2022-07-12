import { useEffect, useState } from "react";
// import {useHistory} from 'react-router-dom'
// import { createShoe  } from "../redux/features/shoesSlice";

function UserShoeForm() {
    const [shoes, setShoes] = useState([]);
    const [shoeId, setShoeId] = useState("");
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const [formErrors, setFormErrors] = useState([]);
    // const history = useHistory();

    useEffect(() => {
        fetch('/users')
        .then((res) => res.json())
        .then(setUsers)
}, []);

    useEffect(() => {
        fetch('/shoes')
        .then((res) => res.json())
        // console.log(setShoes)
        .then(setShoes)
}, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            shoe_id: shoeId,
            user_id: userId,
            // rating,
        }
    fetch("/user_shoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        if (res.ok) {
        //     history.push(`/users/${userId}`);
        // } else {
            res.json().then((err) => setFormErrors(err.errors));
        }
        })
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="shoe_id">Shoe:</label>
        <select
          id="shoe_id"
          name="shoe_id"
          value={shoeId}
          onChange={(e) => setShoeId(e.target.value)}
        >
          <option value="">Add a shoe</option>
          {shoes.map((shoe) => (
            <option key={shoe.id} value={shoe.id}>
              {shoe.name}
            </option>
          ))}
        </select>
        {formErrors.length > 0
          ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
          <button type="submit">Add Shoe</button>
      </form>
    );



}

export default UserShoeForm


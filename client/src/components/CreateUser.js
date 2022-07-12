import {useState} from "react"

function CreateUser() {
  const [submitted, setSubmitted] = useState(false);
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(false);

    function refreshPage() {
    window.location.reload(false);
  }


  const handleNewName = (e) => {
    setNewName(e.target.value);
    setSubmitted(false);
  };

  const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    setSubmitted(false);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
    setSubmitted(false);
  };

  const handleNewUser = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        username: newUsername,
        email: newEmail,
        password: newPassword,
        password_digest: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setNewUsername(user));
        return res.json().then((body) => setNewUsername(body));
      }
    });

    if (
      newName === "" ||
      newUsername === "" ||
      newEmail === "" ||
      newPassword === ""
    ) {
      e.preventDefault();
      setError(true);
    } else {
      setSubmitted(true);
        refreshPage();
      setError(false);
    }

    setNewName("");
    setNewUsername("");
    setNewEmail("");
    setNewPassword("");
    setPasswordConfirmation("");
  };

  // Showing success message
  // const successMessage = () => {
  //   return (
  //     <div
  //       className="success"
  //       style={{
  //         display: submitted ? "" : "none",
  //       }}
  //     >
  //       <h1>User {newUsername} successfully registered!!</h1>
  //     </div>
  //   );
  // };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div align="center">
      <form className="form-container" onSubmit={handleNewUser}>
        <div style={{ fontSize: 10, color: "red" }}>
          {errorMessage()}
          {/* {successMessage()} */}
        </div>
        <div>
          <h1 className="form-name">Create New Account</h1>
          <br></br>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={newName}
            onChange={handleNewName}
            required
          />
          <br></br>
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={newUsername}
            onChange={handleNewUsername}
            required
          />
          <br></br>
          <label>Email </label>
          <input
            type="text"
            name="email"
            value={newEmail}
            onChange={handleNewEmail}
            required
          />
          <br></br>
        </div>
        
        <div>
          <label>Create Password: </label>
          <input
            type="password"
            name="password"
            value={newPassword}
            onChange={handleNewPassword}
            required
          />
          <br></br>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmation}
            required
          />
        </div>
        <div>
          <button className="form-button" type="submit">
            {" "}
            Create New Account!{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
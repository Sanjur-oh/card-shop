import { Routes, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
import Login from "./components/Login"
import CreateUser from "./components/CreateUser"
import ShoesPage from "./pages/ShoesPage"
import ShoeDetails from "./pages/ShoeDetails"
import List from "./pages/List"
import Main from "./home/Main"



function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   //Keeps user logged in
   useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          setLoggedIn(true)
        });
      }
    })

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
  }

 

  return (
    <>
      <Navbar
        onLogout={handleLogout}
        handleLogin={handleLogin}
        loggedIn={loggedIn}
      />

      <div className="container">
        <Routes>
          <Route path="/" element={<Main user={user} loggedIn={loggedIn} />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/shoes/:id" element={<ShoeDetails />} />
          <Route path="/list" element={<List />} />
          <Route
            path="/login"
            element={
              <Login
                error={"Please login!"}
                handleLogin={handleLogin}
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}/>}
          />
          <Route path="/create_user" element={<CreateUser />} />
          <Route path="/profile" element={<Profile isAuthenticated={isAuthenticated} user={user}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;








// import ChangeColor from "./components/ChangeColor"

 // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
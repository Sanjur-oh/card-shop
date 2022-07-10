import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
import Login from "./components/Login"
import ShoesPage from "./pages/ShoesPage"
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
        <Navbar onLogout={handleLogout} onLogin={handleLogin} loggedIn={loggedIn} user={user} setUser={setUser}/>
       
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />   
          </Routes>
        </div>
      {/* <div>
        <Main /> 
      </div> */}
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
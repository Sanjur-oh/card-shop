// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
import Login from "./components/Login"
// import ChangeColor from "./components/ChangeColor"
import ShoesPage from "./pages/ShoesPage"
import Cart from "./pages/Cart"
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />   
        </Routes>
      </div>
    </>  
  );
}

export default App;
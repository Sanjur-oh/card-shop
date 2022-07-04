// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
// import Login from "./components/Login"
// import ChangeColor from "./components/ChangeColor"
import ProductsPage from "./pages/ProductsPage"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />   
        </Routes>
      </div>
    </>  
  );
}

export default App;
// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import ProductPage from "./pages/ProductPage"
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
          <Route path="/products" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />   
        </Routes>
      </div>
    </>  
  );
}

export default App;
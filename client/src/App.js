// client/src/components/App.js
import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
import Login from "./components/Login"
// import ChangeColor from "./components/ChangeColor"
import ShoesPage from "./pages/ShoesPage"
import List from "./pages/List"
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main"


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
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list" element={<List />} />
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
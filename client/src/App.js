import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"
import Login from "./components/Login"
import ShoesPage from "./pages/ShoesPage"
import List from "./pages/List"
import Main from "./home/Main"



function App() {
 

  return (
      <>
        <Navbar/>
       
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Login />} />
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
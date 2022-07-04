import { Link } from "react-router-dom";
import logo from "./logo.png";

    function Navbar() {
       return( 
       <nav className="nav">
            
            <ul>
                {/* <Link to="/" className="site-title"> Sweet Feet </Link> */}
                <Link to="/"><img src={logo} alt="Sweet Feet" /></Link>
                {/* <img src={logo} alt="Sweet Feet" /> */}
            
                <li className="active">
                    <Link to="/products"> Products </Link>
                </li>
            </ul>

            <ul>
                <li className="active">
                    <Link to="/profile"> Profile </Link>
                </li>
            </ul>
            
        </nav>
       )
    }

    export default Navbar;


    // {/* <ul>
    //     <li className="active">
    //        <Link to="/login"> Login </Link>
    //     </li>
    //  </ul> */}
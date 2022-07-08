import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {BsPerson} from "react-icons/bs"
// import NavbarStyle from "./src/components/NavbarStyle
// import {BiSearch} from "react-icons/bi"

    function Navbar() {

    

       return (
         <nav className="navbar">

           <ul>
             <Link to="/">
               <img src={logo} alt="Sweet Feet" />
             </Link>
             <li className="active">
               <Link to="/shoes"> Kicks </Link>
             </li>
             <li className="active">
               <Link to="/list"> The List </Link>
             </li>     
           </ul>

           <ul>
             <li className="active">
               <Link to="/login"> Login </Link>
             </li>
              <li className="nav-icons">
              <Link to="/profile"><BsPerson className="icon" /></Link>
             </li>
           </ul>
         </nav>
       );
    }

    export default Navbar;



    // needs styling and implement search feature
    // <div className="nav-icons"></div>
    // <li className="nav-icons"><BiSearch className="icon" /></li>


    // if we want image in center of nav
    //  {/* <img src={logo} alt="Sweet Feet" /> */}
    
    //if we want title to be home
    // <Link to="/" className="site-title"> Sweet Feet </Link>


    
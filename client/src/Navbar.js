import React from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.png";


    function Navbar() {

    

       return (
         <nav className="nav">
           <ul>
             {/* <Link to="/" className="site-title"> Sweet Feet </Link> */}
             <Link to="/home">
               <img src={logo} alt="Sweet Feet" />
             </Link>
             {/* <img src={logo} alt="Sweet Feet" /> */}

             <li className="active">
               <Link to="/shoes"> Kicks </Link>
             </li>
           </ul>
           {/* <ul><li className="active" >Sweet Feet</li></ul> */}
           <ul>
             <li className="active">
               <Link to="/"> Login </Link>
             </li>
             <li className="active">
               <Link to="/profile"> Profile </Link>
             </li>
             <li className="active">
               <Link to="/cart"> Cart </Link>
             </li>     
           </ul>
         </nav>
       );
    }

    export default Navbar;


    
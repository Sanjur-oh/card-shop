import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./NavbarStyle.css"
import logo from "../assets/logo.png";
import {BsPerson} from "react-icons/bs"


    function Navbar({onLogout}) {
      
      function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    

       return (
         <nav className="navbar">
           <ul>
              <div><Link to="/"><img src={logo} alt="Sweet Feet" /></Link></div>
              <li className="active"><Link to="/shoes"> Kicks </Link></li>
              <li className="active"><Link to="/list"> The List </Link></li>
            </ul>  
            <ul>
              <li className="active"><Link to="/login"> Login </Link></li>  
              <li className="active"><Link to="/" onClick={handleLogout}>{" "}Logout{" "}</Link></li>
              <li className="nav-icons"><Link to="/profile"><BsPerson className="icon" /></Link></li>
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

                  //   <ul className="mobile-nav">
                  //     <li className="active">
                  //       <Link to="/"> Sweet Feet </Link>
                  //     </li>
                  //     <li className="active">                   
                  //       <Link to="/shoes"> Kicks </Link>
                  //     </li>     
                  //     <li className="active">
                  //       <Link to="/list"> The List </Link>
                  //     </li>  
                  //     <li className="active">
                  //       <Link to="/login"> Login </Link>
                  //     </li>
                  //     <li className="active">  
                  //       <Link to="/profile"> Profile </Link>
                  //     </li>
                  // </ul>

          // hamburger mobile nav funky
        // import {BiSearch} from "react-icons/bi"
          // import {AiFillYoutube} from "react-icons/ai";
          // import { HiOutlineMenuAlt4 } from "react-icons/hi";
          // import {FaEbay} from "react-icons/fa"
          // import {GiGoat, GiConverseShoe} from "react-icons/gi"

          // const [nav, setNav] = useState(false)
          // const handleNav = () => setNav(!nav)

          // <div className="hamburger" onClick={handleNav}>
          //     <HiOutlineMenuAlt4 className="icon" />
          // </div>
          // <ul>      
          //     <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          //         <ul className="mobile-nav">
          //             <div>
          //               {/* <li><Link to="/"> Sweet Feet </Link></li> */}
          //               <li><Link to="/"><img src={logo} alt="Sweet Feet" /></Link></li>
          //               <li><Link to="/shoes"> Kicks </Link></li>
          //               <li><Link to="/list"> The List </Link></li>
          //               <li><Link to="/login"> Login </Link></li>
          //               <li><Link to="/profile"> Profile </Link></li>
          //             </div>
          //         </ul>
          //         <div className="mobile-menu-bottom">
          //           {/* <div className=".menu-icons">
          //             <Link to="/profile"><BsPerson className="icon" /></Link>
          //           </div> */}
          //           <div className="social-icons">
          //             <GiGoat className="icon" />
          //             <GiConverseShoe className="icon" />
          //             <FaEbay className="icon" />
          //             {/* <AiFillYoutube className="icon" /> */}
          //           </div>
          //         </div>
          //     </div>
          //  </ul>
    
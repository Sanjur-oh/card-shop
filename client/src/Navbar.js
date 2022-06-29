// import { Link } from "react-router-dom";

    function Navbar() {
       return( <nav className="nav">
            <a href="/" className="site-title"> 
            Card Site 
            </a>
            <ul>
                <li>
                    <a href="/products"> 
                    Products
                    </a>
                    {/* <a href="/products"> 
                    Products
                    </a> */}
                </li>
            </ul>
        </nav>
       )
    }

    export default Navbar;
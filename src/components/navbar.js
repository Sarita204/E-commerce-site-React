import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import cart from "../images/shopping-cart.png";
import logo from "../images/logo.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div>
            <header className="navbar-container" >
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" className="cart-logo" />
                        </a>
                <div className="navbar">
              
                <ul className={click ? "nav-menu active" : "nav-menu"}>
   
                    <li className="nav-item">
                        <a href="/" className="nav-links">
                            Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/about" className="nav-links">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/products" className="nav-links">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-links">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/signin" className="nav-links">
                            Sign In
                        </a>
                    </li>
                    
                </ul>
                
                </div>
                
                <div className="left-icons-container">
                    <a href="/cart">
                    <div className="icon-container">
                    <img src={cart} alt="logo" className="cart-logo"/>
                    </div>
                    </a>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Products</a></li>  
                        <li><a href="/projects">Contact</a></li>                   
                 
                </ul>
</div>
                </div>
            </header>
        </div>

    );
}
export default Navbar;
import React from 'react'
import "./Navbar.css";
import Logo from '../../Assets/meateat 1.png';

function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="invalid" />
            <nav>
                <ul className="nav__links">
                    <li><a className="product" href="#">Products</a></li>
                    <li><a className="support" href="#">Support</a></li>
                    <li><a className="contact" href="#">Contact Us</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button className="download">Download App</button></a>

        </div>
    )
}

export default Navbar

import React from 'react';
import './Header.css';

import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";


const Header = () => {
    return (
        <div className="Navbar">
            <div className="logoDiv">
                <h2 className="logo">
                    TravelFlex
                </h2>
            </div>
            <div className="menu">
                <div className="lists flex">
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Hotels</a>
                    </li>
                    <li>
                        <a href="">Flights</a>
                    </li>
                    <li>
                        <a href="">Bookings</a>
                    </li>
                </div>
                <div className="btns flex">
                    <button className="btn">Login</button>
                    <button className="btn">SignUp</button>
                    <select className="lang">
                        <option value="">EN</option>
                        <option value="">FR</option>
                        <option value="">SP</option>
                    </select>
                </div>
                <div className="closeIcon">
                    <AiFillCloseCircle className="icon" />
                </div>
                <div className="toggleIcon">
                    <PiDotsNineBold className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Header
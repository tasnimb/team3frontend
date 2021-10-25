import React from "react";
import logo from "./images/SkyTravel.jpg"
import { useHistory } from "react-router-dom";


const Header = () => {


    return (
        <header>
            <nav className="navbar" style={{ height: '65px'}}>
                <img src={logo} alt="SKY Logo" style={{ width: '150px', paddingLeft:"10px"}} />
            </nav>
        </header>
    )
}

export default Header;
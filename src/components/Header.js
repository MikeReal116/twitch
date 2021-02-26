import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";


const Header = () => {

    return(
        <div className ="header-container">
            <div className="header-logo">
                <Link to="/" className="header-link">Twitch</Link>
            </div>
            <div className="header-nav">
               <Link to="/" className="header-link">All Streams</Link>
               <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;
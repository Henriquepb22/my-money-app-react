import React from "react";

import Navbar from "../Navbar";

const Header = () => (
    <header className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/#" className="nav-link" data-widget="pushmenu">
                    <i className="fa fa-bars" />
                </a>
            </li>
        </ul>
        <Navbar />
    </header>
);

export default Header;

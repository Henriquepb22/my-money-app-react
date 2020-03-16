import React from "react";

import Navbar from "./navbar";

const Header = () => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">
                <b>My</b>M
            </span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <button className="sidebar-toggle" data-toggle="offcanvas"></button>
            <Navbar />
        </nav>
    </header>
);

export default Header;

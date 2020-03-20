import React from "react";

import Menu from "../Menu";

const SideBar = () => (
    <aside className="main-sidebar sidebar-dark-primary">
        <a href="/#" className="brand-link logo-switch">
            <span className="brand-text-xs logo-xs font-weight-light">MyM</span>
            <span className="brand-text-xl logo-xl font-weight-light">
                My Money <i className="nav-icon fa fa-money"></i>
            </span>
        </a>
        <div className="sidebar mt-2">
            <Menu />
        </div>
    </aside>
);

export default SideBar;

import React from "react";

const MenuTree = props => (
    <li className="treeview">
        <button>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            <i className="fa fa-angle-left pull-right"></i>
        </button>
        <ul className="treeview-menu">{props.children}</ul>
    </li>
);

export default MenuTree;

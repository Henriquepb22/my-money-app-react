import React from "react";

import MenuItem from "../MenuItem";
import MenuTree from "../MenuTree";

const Menu = () => (
    <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
    >
        <MenuItem path="/" label="Dashboard" icon="dashboard"></MenuItem>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem
                path="billingCycles"
                label="Ciclo de Pagamentos"
                icon="usd"
            ></MenuItem>
        </MenuTree>
    </ul>
);

export default Menu;

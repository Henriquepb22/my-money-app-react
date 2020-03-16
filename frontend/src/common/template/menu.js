import React from "react";

import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

const Menu = () => (
    <ul className="sidebar-menu">
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
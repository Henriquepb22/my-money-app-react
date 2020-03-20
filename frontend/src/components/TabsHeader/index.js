import React from "react";

const TabsHeader = props => (
    <ul className="nav nav-tabs" role="tablist">
        {props.children}
    </ul>
);

export default TabsHeader;

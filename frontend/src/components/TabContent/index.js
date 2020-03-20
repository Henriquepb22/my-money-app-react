import React from "react";
import { connect } from "react-redux";

import If from "../If";

const TabContent = props => {
    const selected = props.tab.selected === props.id;
    const visible = props.tab.visible[props.id];

    return (
        <If test={visible}>
            <div
                id={props.id}
                className={`tab-pane ${selected ? "active" : ""}`}
            >
                {props.children}
            </div>
        </If>
    );
};

const mapStateToProps = state => ({ tab: state.tab });
export default connect(mapStateToProps)(TabContent);

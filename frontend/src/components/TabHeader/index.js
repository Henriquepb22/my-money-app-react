import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab } from "../../actions/tabActions";
import If from "../If";

const TabHeader = props => {
    const selected = props.tab.selected === props.target;
    const visible = props.tab.visible[props.target];

    return (
        <If test={visible}>
            <li className="nav-item">
                <a
                    href="#/billingCycles"
                    className={`nav-link ${selected ? "active" : ""}`}
                    data-toggle="pill"
                    role="tab"
                    onClick={() => props.selectTab(props.target)}
                    data-target={props.target}
                >
                    <i className={`fa fa-${props.icon}`}></i> {props.label}
                </a>
            </li>
        </If>
    );
};

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);

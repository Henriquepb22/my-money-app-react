import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab } from "./tabActions";
import If from "../operator/If";

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target;
        const visible = this.props.tab.visible[this.props.target];
        return (
            <If test={visible}>
                <li className={selected ? "active" : ""}>
                    <button
                        data-toggle="tag"
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}
                    >
                        <i className={`fa fa-${this.props.icon}`}></i>{" "}
                        {this.props.label}
                    </button>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);

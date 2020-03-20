import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logout } from "../../actions/authActions";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    changeOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { name, email } = this.props.user;
        return (
            <ul className="navbar-nav ml-auto">
                <li
                    onMouseLeave={() => this.changeOpen()}
                    className="dropdown user user-menu"
                >
                    <a
                        href="#/"
                        onClick={() => this.changeOpen()}
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                    >
                        <img
                            src="http://lorempixel.com/160/160/abstract"
                            className="user-image"
                            alt="User profile"
                        />
                        <span className="hidden-xs">{name}</span>
                    </a>
                    <ul
                        className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                            this.state.open ? "show" : ""
                        }`}
                    >
                        <li className="dropdown-header">
                            <img
                                src="http://lorempixel.com/160/160/abstract"
                                className="img-circle"
                                alt="User"
                            />
                            <p>{name}</p>
                            <span>
                                <small> {email}</small>
                            </span>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <a
                                    href="/"
                                    onClick={this.props.logout}
                                    className="btn btn-default btn-flat"
                                >
                                    Sair
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

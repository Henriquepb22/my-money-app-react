import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logout } from "../../actions/authActions";

const Navbar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, email } = props.user;

    return (
        <ul className="navbar-nav ml-auto">
            <li
                onMouseLeave={e => setIsOpen(!isOpen)}
                className="dropdown user user-menu"
            >
                <a
                    href="#/"
                    onClick={e => setIsOpen(!isOpen)}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                >
                    <img
                        src="http://lorempixel.com/160/160/abstract"
                        className="user-image"
                        alt="User"
                    />
                    <span className="hidden-xs">{name}</span>
                </a>
                <ul
                    className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                        isOpen ? "show" : ""
                    }`}
                >
                    <li className="dropdown-header">
                        <img
                            src="http://lorempixel.com/160/160/abstract"
                            className="img-circle"
                            alt="User profile"
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
                                onClick={props.logout}
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
};

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

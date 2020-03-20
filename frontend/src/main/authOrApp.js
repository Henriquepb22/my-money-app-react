import "./dependencies";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./app";
import Auth from "../pages/Auth";
import { validateToken } from "../actions/authActions";

const AuthOrApp = props => {
    if (props.auth.user) {
        props.validateToken(props.auth.user.token);
    }

    const { user, validToken } = props.auth;
    if (user && validToken) {
        axios.defaults.headers.common["authorization"] = user.token;
        return <App>{props.children}</App>;
    } else if (!user && !validToken) {
        return <Auth />;
    } else {
        return null;
    }
};

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);

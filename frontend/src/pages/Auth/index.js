import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signup } from "../../actions/authActions";
import Row from "../../components/Row";
import Grid from "../../components/Grid";
import Messages from "../../components/Messages";
import InputAuth from "../../components/InputAuth";

import "./styled.css";

let Auth = props => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { handleSubmit } = props;

    function onSubmit(values) {
        const { login, signup } = props;
        isLoginMode ? login(values) : signup(values);
    }

    return (
        <div className="login-box">
            <div className="login-logo">
                <span>
                    <strong> My</strong> Money
                </span>
            </div>
            <div className="login-box-body">
                <p className="login-box-msg">Bem vindo!</p>
                <form onSubmit={handleSubmit(e => onSubmit(e))}>
                    <Field
                        component={InputAuth}
                        type="input"
                        name="name"
                        placeholder="Nome"
                        icon="user"
                        hide={isLoginMode}
                    />
                    <Field
                        component={InputAuth}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        icon="envelope"
                    />
                    <Field
                        component={InputAuth}
                        type="password"
                        name="password"
                        placeholder="Senha"
                        icon="lock"
                    />
                    <Field
                        component={InputAuth}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar Senha"
                        icon="lock"
                        hide={isLoginMode}
                    />
                    <Row>
                        <Grid cols="12 12 4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-flat"
                            >
                                <span>
                                    {isLoginMode ? "Entrar" : "Registrar"}
                                </span>
                            </button>
                        </Grid>
                    </Row>
                </form>
                <br />
                <a href="/#" onClick={e => setIsLoginMode(!isLoginMode)}>
                    <span>
                        {isLoginMode
                            ? "Novo usuário? Registrar aqui!"
                            : "Já é cadastrado? Entrar aqui!"}
                    </span>
                </a>
            </div>
            <Messages />
        </div>
    );
};

Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = dispatch =>
    bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);

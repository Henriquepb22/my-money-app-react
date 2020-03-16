import React from "react";

const Input = props => (
    <input
        {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
    />
);

export default Input;

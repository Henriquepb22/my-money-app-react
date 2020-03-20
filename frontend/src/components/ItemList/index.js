import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";

import Grid from "../Grid";
import Input from "../Input";
import If from "../If";

const ItemList = props => {
    function add(index, item = {}) {
        if (!props.readOnly) {
            props.arrayInsert("billingCycleForm", props.field, index, item);
        }
    }

    function remove(index) {
        if (!props.readOnly && props.list.length > 1) {
            props.arrayRemove("billingCycleForm", props.field, index);
        }
    }

    function renderRows() {
        const list = props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field
                        name={`${props.field}[${index}.name]`}
                        component={Input}
                        placeholder="Informe o nome"
                        readOnly={props.readOnly}
                    />
                </td>
                <td>
                    <Field
                        name={`${props.field}[${index}.value]`}
                        component={Input}
                        placeholder="Informe o valor"
                        readOnly={props.readOnly}
                    />
                </td>
                <If test={props.showStatus}>
                    <td>
                        <Field
                            name={`${props.field}[${index}.status]`}
                            component={Input}
                            placeholder="Informe o status"
                            readOnly={props.readOnly}
                        />
                    </td>
                </If>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={e => add(index + 1)}
                    >
                        <i className="fa fa-plus" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={e => add(index + 1, item)}
                    >
                        <i className="fa fa-clone" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={e => remove(index)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>{props.legend}</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{renderRows()}</tbody>
                </table>
            </fieldset>
        </Grid>
    );
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);

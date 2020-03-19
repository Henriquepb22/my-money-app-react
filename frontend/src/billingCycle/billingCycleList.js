import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getList, showUpdate, showDelete } from "./billingCycleActions";

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(cycles => (
            <tr key={cycles._id}>
                <th>{cycles.name}</th>
                <th>{cycles.month}</th>
                <th>{cycles.year}</th>
                <th>
                    <button
                        className="btn btn-warning"
                        onClick={() => this.props.showUpdate(cycles)}
                    >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.props.showDelete(cycles)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </th>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);

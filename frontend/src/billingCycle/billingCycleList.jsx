import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './billingCycleActions';

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(bc => (
      <tr key={bc._id}>
        <th>{bc.name}</th>
        <th>{bc.month}</th>
        <th>{bc.year}</th>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
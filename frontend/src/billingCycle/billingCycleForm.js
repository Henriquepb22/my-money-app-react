import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { init } from "./billingCycleActions";
import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";
import Row from "../common/layout/row";

class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: this.props.credits
                .map(c => +c.value || 0)
                .reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        };
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();
        return (
            <form onSubmit={handleSubmit}>
                <div className="box-body p-2">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        cols="12 4"
                        label="Nome"
                        placeholder="Informe o nome"
                    />
                    <Field
                        name="month"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        cols="12 4"
                        type="number"
                        label="Mês"
                        placeholder="Informe o mês"
                    />
                    <Field
                        name="year"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        cols="12 4"
                        type="number"
                        label="Ano"
                        placeholder="Informe o ano"
                    />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <Row>
                        <ItemList
                            cols="12 6"
                            list={credits}
                            readOnly={readOnly}
                            field="credits"
                            legend="Créditos"
                        />
                        <ItemList
                            cols="12 6"
                            list={debts}
                            readOnly={readOnly}
                            field="debts"
                            legend="Débitos"
                            showStatus={true}
                        />
                    </Row>
                </div>
                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.submitClass}`}
                    >
                        {this.props.submitLabel}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({
    form: "billingCycleForm",
    destroyOnUnmount: false
})(BillingCycleForm);
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = state => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts")
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);

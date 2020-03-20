import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "../../actions/dashboardActions";
import ContentHeader from "../../components/ContentHeader";
import Content from "../../components/Content";
import ValueBox from "../../components/ValueBox";
import Row from "../../components/Row";

let Dashboard = props => {
    const { credit, debt } = props.summary;

    useEffect(() => {
        props.getSummary();
    });

    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 2.0" />
            <Content>
                <Row>
                    <ValueBox
                        cols="12 4"
                        color="green"
                        value={`R$ ${credit}`}
                        text="Total de Créditos"
                        icon="bank"
                    />
                    <ValueBox
                        cols="12 4"
                        color="red"
                        value={`R$ ${debt}`}
                        text="Total de Débitos"
                        icon="credit-card"
                    />
                    <ValueBox
                        cols="12 4"
                        color="blue"
                        value={`R$ ${credit - debt}`}
                        text="Valor Consolidado"
                        icon="money"
                    />
                </Row>
            </Content>
        </div>
    );
};

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

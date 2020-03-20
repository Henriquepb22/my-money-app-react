import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../../components/ContentHeader";
import Content from "../../components/Content";
import Tabs from "../../components/Tabs";
import TabsHeader from "../../components/TabsHeader";
import TabsContent from "../../components/TabsContent";
import TabHeader from "../../components/TabHeader";
import TabContent from "../../components/TabContent";
import List from "../../components/BillingCycleList";
import Form from "../../components/BillingCycleForm";

import {
    init,
    create,
    update,
    remove
} from "../../actions/billingCycleActions";

const BillingCycle = props => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        function initialize() {
            if (isInitialized) {
                return false;
            } else {
                props.init();
                setIsInitialized(true);
            }
        }

        initialize();
    });

    return (
        <div>
            <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader
                            label="Listar"
                            icon="bars"
                            target="tabList"
                        />
                        <TabHeader
                            label="Incluir"
                            icon="plus"
                            target="tabCreate"
                        />
                        <TabHeader
                            label="Alterar"
                            icon="pencil"
                            target="tabUpdate"
                        />
                        <TabHeader
                            label="Excluir"
                            icon="trash-o"
                            target="tabDelete"
                        />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <List />
                        </TabContent>
                        <TabContent id="tabCreate">
                            <Form
                                onSubmit={props.create}
                                submitClass="primary"
                                submitLabel="Incluir"
                            />
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <Form
                                onSubmit={props.update}
                                submitClass="info"
                                submitLabel="Alterar"
                            />
                        </TabContent>
                        <TabContent id="tabDelete">
                            <Form
                                onSubmit={props.remove}
                                submitClass="danger"
                                submitLabel="Excluir"
                                readOnly={true}
                            />
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    );
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ init, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);

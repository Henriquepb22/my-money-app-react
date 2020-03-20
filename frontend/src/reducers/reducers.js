import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashboardReducer from "./dashboardReducer";
import TabReducer from "./tabReducer";
import BillingCycleReducer from "./billingCycleReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
});

export default rootReducer;

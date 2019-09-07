import {
  combineReducers
} from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer
})

export default rootReducer;
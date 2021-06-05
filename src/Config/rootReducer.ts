import { combineReducers } from "redux";
import general from '../store/general/reducers'
import flights from '../store/Flights/reducers'

const rootReducer = combineReducers({
    general,
    flights
});


export default rootReducer;
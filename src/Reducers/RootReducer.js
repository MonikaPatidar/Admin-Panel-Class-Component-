import {combineReducers} from 'redux'
import {RegisterReducer} from './register';
import {LoginReducer} from './LoginReducer'
import CategoryReducer from './Category'

const rootReducer=combineReducers({
    register:RegisterReducer,
    Login:LoginReducer,
    category:CategoryReducer,
});

export default rootReducer;
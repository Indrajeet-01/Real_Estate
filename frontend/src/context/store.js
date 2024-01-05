import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import authReducer from './reducers/auth';
import alertReducer from './reducers/alert'


const rootReducer = combineReducers({
  user: authReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
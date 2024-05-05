import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk';
import authReducer from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducers } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";


const rootReducers = combineReducers({
    auth: authReducer,
    customersProduct: customerProductReducer,
    cart: cartReducers,
    order: orderReducer
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));
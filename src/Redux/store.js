import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./Counter/reducer";
import {itemReducer, listReducer} from "./List/reducer";
import thunk from "redux-thunk";

const reducers=combineReducers({
    counter:counterReducer,
    list:listReducer,
    item:itemReducer
})



export const store=createStore(
    reducers,
    applyMiddleware(thunk))

/** We can take dispatch from the store without using useDispatch*/
export const dispatch=store.dispatch
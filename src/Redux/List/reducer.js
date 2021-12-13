import {
    ADD_ITEM, GET_ITEM_FAIL,
    GET_ITEM_START,
    GET_ITEM_SUCCESS,
    GET_LIST_ITEMS_FAIL,
    GET_LIST_ITEMS_START,
    GET_LIST_ITEMS_SUCCESS
} from "./constants";

export const listReducer=(initialState={
    isLoading:false,
    list:[],
    error:''
}, action)=>{
    switch (action.type) {
        case GET_LIST_ITEMS_START: return {
            ...initialState,
            isLoading: true
        }
        case GET_LIST_ITEMS_SUCCESS: return {
            ...initialState,
            isLoading: false,
            list: action.payload
        }
        case GET_LIST_ITEMS_FAIL: return {
            ...initialState,
            isLoading: false,
            error: action.payload
        }

        case ADD_ITEM: return {
            ...initialState,
            list:[action.payload, ...initialState.list]
        }

        default :return initialState
    }

}


export const itemReducer=(initialState={
    isLoading:false,
    item:{},
    error:''
}, action)=>{
    switch (action.type) {
        case GET_ITEM_START: return {
            ...initialState,
            isLoading: true
        }
        case GET_ITEM_SUCCESS: return {
            ...initialState,
            isLoading: false,
            item: action.payload
        }
        case GET_ITEM_FAIL: return {
            ...initialState,
            isLoading: false,
            error: action.payload
        }
        default :return initialState
    }

}
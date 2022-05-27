import { CHANGE_SEARCH_FIELD } from "./actions"

import { REQUEST_FAILURE } from "./actions";
import { REQUEST_SUCCESS } from "./actions";
import { REQUEST_PENDING } from "./actions";

const initialStateSearch = {
    searchField : ''
}

//reducers return state from the store depending on the action type they receive
//and update accordingly
export const searchRobots = (state = initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
            
        default : return state
        }
}

const initialStateRobots = {
    isPending : false,
    robots : [],
    error : ''
}

export const requestRobots = (state = initialStateRobots, action ={} ) => {
    switch(action.type){
        case REQUEST_PENDING : 
            return {...state, isPending : true}
        
        case REQUEST_SUCCESS : 
            return {...state, robots : action.payload, isPending : false}
        
        case REQUEST_FAILURE :
            return {...state, error : action.payload, isPending: false}
        default:
            return state
    }
}
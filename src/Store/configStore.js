import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    cities:["Bangaluru", "Delhi","Pune","Mumbai","Hyderabad"],
    restaurantsList: null,
    restaurantDetails:null
}

function newState(state=defaultState, action){
    switch(action.type){
        case 'RESTAURANTS_LIST_FETCHED':
        return{
            ...state,
            restaurantsList:action.data
        }
        case 'RESTAURANT_DETAILS_FETCHED':
        return{
            ...state,
            restaurantDetails:action.data
        }
        default:
            return state
    }
        
}

const store = createStore(newState, applyMiddleware(thunk));
export default store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    cities:["Bangaluru", "Delhi","Pune","Mumbai","Hyderabad"],
    restaurantsData: null 
}

function newState(state=defaultState, action){
    switch(action.type){
        case 'RESTAURANTS_DATA_FETCHED':
        return{
            ...state,
            restaurantsData:action.data
        }
        default:
            return state
    }
        
}

const store = createStore(newState, applyMiddleware(thunk));
export default store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    cities:["Bangaluru", "Delhi","Pune","Mumbai","Hyderabad"],
    restaurantsList: {
        restaurants: [],
        results_found: 0,
        results_start: 0,
        results_shown: 0,
    },
    restaurantDetails:null
}

function newState(state=defaultState, action){
    switch(action.type){
        case 'RESTAURANTS_LIST_FETCHED':
        return{
            ...state,
            restaurantsList: {
                restaurants: [...state.restaurantsList.restaurants, ...action.data.restaurants],
                results_found: action.data.results_found,
                results_start: action.data.results_start,
                results_shown: action.data.results_shown
            }
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
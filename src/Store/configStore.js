import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let likedRestaurantsInLS = localStorage.getItem('likedRestaurants');

if (likedRestaurantsInLS) {
    likedRestaurantsInLS = JSON.parse(likedRestaurantsInLS);
} else {
    likedRestaurantsInLS = [];
}

const defaultState = {
    cities:["Bengaluru", "Delhi","Pune","Mumbai","Hyderabad"],
    restaurantsList: {
        restaurants: [],
        results_found: 0,
        results_start: 0,
        results_shown: 0,
    },
    restaurantDetails:null,
    restaurantReviews:{
        user_reviews:[],
        review_count:0,
        review_shown:0,
        review_start:0
    },
    totalReviews:{
        totalUser_reviews:[],
        totalReview_count:0,
        totalReview_shown:0,
        totalReview_start:0
    },
    likedRestaurants: likedRestaurantsInLS
}

function newState(state=defaultState, action){
    let restaurantsArrayInState = [];
    let likedRestaurantsID  = [];
    switch(action.type){
        case 'RESTAURANTS_LIST_FETCHED':
        let restaurantsArray = [...state.restaurantsList.restaurants, ...action.data.restaurants];
        restaurantsArray.forEach(element => {
            const restId = element.restaurant.R.res_id;
            let isLiked = false;
    
            if (state.likedRestaurants.indexOf(restId) >= 0) {
                isLiked = true;
            }
            
            element.isLiked = isLiked;
            });

        return{
            ...state,
            restaurantsList: {
                restaurants: restaurantsArray,
                results_found: action.data.results_found,
                results_start: action.data.results_start,
                results_shown: action.data.results_shown
            },
            restaurantDetails:null,
            restaurantReviews:defaultState.restaurantReviews
        }
        case 'RESTAURANT_DETAILS_FETCHED':
        const restaurantData = action.data;
   
        if (state.likedRestaurants.indexOf(restaurantData.R.res_id) >=0) {
            restaurantData.isLiked = true;
        } else {
            restaurantData.isLiked = false;
        }

        return{
            ...state,
            restaurantDetails: restaurantData,
            totalReviews:defaultState.totalReviews
        }
        case 'RESTAURANT_REVIEWS_FETCHED':
        return{
            ...state,
            restaurantReviews:{
                user_reviews: action.data.user_reviews,
                review_count: action.data.reviews_count,
                review_start: action.data.reviews_start,
                review_shown: action.data.reviews_shown,
            }
        }
        case 'RESTAURANT_TOTAL_REVIEWS_FETCHED':
        return{
            ...state,
            totalReviews:{
                totalUser_reviews: action.data.user_reviews,
                totalReview_count: action.data.reviews_count,
                totalReview_shown: action.data.reviews_start,
                totalReview_start: action.data.reviews_shown,
            }
        }
        case 'ADD_TO_LIKED': 
        restaurantsArrayInState = [...state.restaurantsList.restaurants];
        likedRestaurantsID = state.likedRestaurants;

        if (state.likedRestaurants.indexOf(action.data < 0)) {
            likedRestaurantsID = [...likedRestaurantsID, action.data];
        }
    
        restaurantsArrayInState.forEach(element => {
        const restId = element.restaurant.R.res_id;
        let isLiked = false;

        if (likedRestaurantsID.indexOf(restId) >= 0) {
            isLiked = true;
        }
        
        element.isLiked = isLiked;
        });

        return{
            ...state,
            restaurantsList: {
                ...state.restaurantsList,
                restaurants: restaurantsArrayInState
            },
            likedRestaurants: likedRestaurantsID
        }

        case 'REMOVE_FROM_LIKED':
            restaurantsArrayInState = [...state.restaurantsList.restaurants];
            likedRestaurantsID = [...state.likedRestaurants];
            const indexOfId = state.likedRestaurants.indexOf(action.data);     
            if ( indexOfId >= 0) {
                likedRestaurantsID.splice(indexOfId, 1);

                restaurantsArrayInState.forEach(element => {
                    const restId = element.restaurant.R.res_id;
                    let isLiked = false;
        
                    if (likedRestaurantsID.indexOf(restId) >= 0) {
                        isLiked = true;
                    }
                    
                    element.isLiked = isLiked;
                });

                return{
                    ...state,
                    restaurantsList: {
                        ...state.restaurantsList,
                        restaurants: restaurantsArrayInState
                    },
                    likedRestaurants: likedRestaurantsID
                }
            }

            return state;

        default:
            return state
    }
        
}

const store = createStore(newState, applyMiddleware(thunk));
export default store
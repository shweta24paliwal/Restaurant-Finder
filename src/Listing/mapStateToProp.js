import {get} from 'lodash';

const mapStateToProp = state => {
    return {
        restaurants:get(state.restaurantsList, 'restaurants',[]),
        result_start: get(state.restaurantsList, "results_start"),
        result_found: get(state.restaurantsList, "results_found"),
        result_shown: get(state.restaurantsList, "results_shown")
    };
}
export default mapStateToProp
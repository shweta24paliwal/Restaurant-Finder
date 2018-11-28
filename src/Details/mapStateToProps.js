import { get } from 'lodash';

const mapStateToProp = state => {
    return {
        details: state.restaurantDetails,
        reviews: get(state.restaurantReviews, "user_reviews"),
        review_count: state.restaurantReviews.review_count,
        review_start: state.restaurantReviews.review_start,
        review_shown: state.restaurantReviews.review_shown,
    };
}

export default mapStateToProp;
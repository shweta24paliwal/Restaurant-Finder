import { get } from 'lodash';
const mapStateToProps= state => {
    debugger;
    return {
        totalReviews: get(state.totalReviews, "totalUser_reviews"),
        totalReview_count: state.totalReviews.totalReview_count,
        totalReview_start: state.totalReviews.totalReview_start,
        totalReview_shown: state.totalReviews.totalReview_shown,
    };
}
export default mapStateToProps
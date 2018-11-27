import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import { get } from 'lodash';
import './Reviews.css';
import { withRouter} from 'react-router-dom';
import Loader from '../Loader/Loader';

class Reviews extends Component{
    componentDidMount(){
        const restId = this.props.match.params.restId;
        this.props.getAllRestaurantReviews(parseInt(restId, 10))
    }
    render(){
        if (this.props.totalReviews.length === 0) {
            return <Loader/>
        }
        let allReviewData = this.props.totalReviews;
        let reviewCount = this.props.totalReview_count;

        let total_reviews = allReviewData.map((review,index)=>{
            const user_image = get(review,"review.user.profile_image");
            const user_name = get(review,"review.user.name");
            const rating = get(review,"review.rating");
            const review_text = get(review,"review.review_text");
            const maxRating = 5;
            const unfilledStar = maxRating - rating;
            let arr = [];
                for (var i = 0; i < rating; i++) {
                    arr.push(<i className="fas fa-star"></i>);
                }
                for(var i = 0; i<unfilledStar; i++){
                    arr.push(<i className="far fa-star"></i>);
                }
            return(
                <li key={index}>
                    <img className='user-image' src={user_image}/>
                    <div className='reviews-info'>
                        <h4 className='user-name'>{user_name}</h4>
                        <span className='stars'>{arr}</span>
                        <p className='review-text'>{review_text}</p>
                    </div>
                    
                </li>
            )
        }) ;
        return(
            <div className='container'>
                <div className='reviews'>
                    <h4 className='head'>Ratings</h4>
                        <ul>
                            {total_reviews}
                        </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Reviews))
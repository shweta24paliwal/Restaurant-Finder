import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import { get } from 'lodash';
import './Details.css';
import { withRouter} from 'react-router-dom';

class Details extends Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        window.scrollTo(0,0);
        const restId = this.props.match.params.restId;
        this.props.getRestaurantDetails(parseInt(restId, 10));
        this.props.getRestaurantReviews(parseInt(restId, 10));
        // Details API Calling
        // this.props.getRestaurantDetails();
        // Reviews API calling
        // this.props.getRestaurantReviews();
    }

    render(){
        const restId = this.props.match.params.restId;
        let data = this.props.details;
        let reviewData = this.props.reviews;
        let reviewCount = this.props.review_count;
        
            const imageURL = get(data, "featured_image");
            const restaurant_Name = get(data, "name");
            const restaurant_Rating = get(data, "user_rating.aggregate_rating");
            const restaurant_Votes = get(data, "user_rating.votes");
            const review_Count = get(reviewCount,"review_count");
            const restaurant_locality = get(data, "location.locality_verbose");
            const restaurant_address = get(data, "location.address");
            const restaurant_cuisine= get(data, "cuisines");
            const rate_for_2 = get(data,"average_cost_for_two");
            const currency = get(data, "currency");
            
            let user_reviews = reviewData.map((review,index)=>{
                const user_image = get(review,"review.user.profile_image");
                const user_name = get(review,"review.user.name");
                const rating = get(review,"review.rating");
                const review_text = get(review,"review.review_text");
                const maxRating = 5;
                const unfilledStar = maxRating - rating;
                let arr = [];
                    for (var i = 0; i < rating; i++) {
                        arr.push(<i class="fas fa-star"></i>);
                    }
                    for(var i = 0; i<unfilledStar; i++){
                        arr.push(<i class="far fa-star"></i>);
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
            <div className='container' key={restId}>
               <img className="details-img" src={imageURL}/>
               <div className='resto-info'>
                   <h4 className='resto-name'>{restaurant_Name}</h4>
                   <div className='rating-info'>
                        <span className='resto-rating'>
                            <i className="far fa-star"></i>
                            {restaurant_Rating}
                        </span>
                        <span className='resto-vote'>({restaurant_Votes}) votes</span>
                        <span className='review-count'>{reviewCount} Reviews</span>
                    </div>

                    <div className='cuisine-info'>
                        <span className='cuisine-items'>{restaurant_cuisine}</span>
                        <span className='cost'>{currency}{rate_for_2} for two</span>
                    </div>

                   <button className='share-btn'>Share</button>

                   <div className='resto-address'>
                        <div class='info'>
                            {restaurant_locality} 
                        </div>
                        <div class='a-info'>
                            {restaurant_address}
                        </div>
                    </div>
                    <div className='btn-section'>
                        <button>Photos</button>
                        <button>Menu</button>
                    </div>
                    <div className='reviews'>
                            <h4 className='head'>Ratings</h4>
                            <ul>
                                {user_reviews}
                            </ul>
                    </div>
               </div>
            </div>
            
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Details))
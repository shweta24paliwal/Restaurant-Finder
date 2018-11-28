import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
import './Listing.css'
import { get } from 'lodash';
import { withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader.js'
import addLikedinLS from '../Helper/addIdToLs.js';
import removeLikedinLS from '../Helper/removeIdFromLs.js';

const count = 10;
class Listing extends Component{
    constructor(props){
        super(props);
        this.loadMoreResult = this.loadMoreResult.bind(this);
        this.intersectionCallback = this.intersectionCallback.bind(this);
        this.likeHandler = this.likeHandler.bind(this);
        this.unLikeHandler = this.unLikeHandler.bind(this);
    }

    componentDidMount() {
        const cityId = this.props.match.params.cityId;
        this.props.getRestaurantsData(0,count, parseInt(cityId, 10));
        // config that define root margin and threshlod 
        const options = {
            rootMargin: '200px',
            threshold: .5
        }
        // this creates a observer;  
        const observer = new IntersectionObserver(this.intersectionCallback, options);
        
        const target = document.querySelector('#listMoreLoader');
        observer.observe(target);
    }
   
    intersectionCallback(entries){
        if (entries[0].intersectionRatio > 0) {
            this.loadMoreResult();
        }
    }

    loadMoreResult(){
        const start = this.props.result_start + this.props.result_shown;
        if(this.props.result_found > start){
            this.props.getRestaurantsData(start,count);
        }
    }

    likeHandler(e,id){
        e.preventDefault();
        e.stopPropagation();
        addLikedinLS(id);
        this.props.addToLiked(id);
    }

    unLikeHandler(e, id) {
        e.preventDefault();
        e.stopPropagation();
        removeLikedinLS(id);
        this.props.removeFromLiked(id);
    }

    render(){
        const cityName = this.props.match.params.cityName;
        let restaurantList = this.props.restaurants.map((data,index)=>{
            const imageURL = get(data, "restaurant.featured_image");
            const restaurant_Name = get(data, "restaurant.name");
            const restaurant_Rating = get(data, "restaurant.user_rating.aggregate_rating");
            const restaurant_Votes = get(data, "restaurant.user_rating.votes");
            const restaurant_locality = get(data, "restaurant.location.locality_verbose");
            const restaurant_address = get(data, "restaurant.location.address");
            const restId = get(data, 'restaurant.R.res_id');
            const restaurant_cuisine = get(data, "restaurant.cuisines");
            if(!imageURL){
                return null;
            }
            return (
                <li key={index}>
                    <Link to={`/details/${restId}`}>
                        <img className='resto-image' src={imageURL}/>
                        <div className='resto-details'>
                            <h4 className='resto-name'>{restaurant_Name}</h4>
                            <h5 className='resto-cuisine'>{restaurant_cuisine}</h5>
                            <h4 className='locality'>{restaurant_locality}</h4>
                            <address>{restaurant_address}</address>
                            <div>
                                <span className='resto-rating'>
                                    <span className='star'><i class="fas fa-star"></i></span>
                                    {restaurant_Rating}
                                </span>
                                <span className='resto-votes'>({restaurant_Votes} votes)</span>
                                {data.isLiked ? (
                                    <button className='unlike-btn' onClick={(e) => this.unLikeHandler(e, restId)}> 
                                        <span className='filled-heart'>
                                            <i className="fas fa-heart"></i> Liked
                                        </span> 
                                    </button>
                                ): (
                                    <button onClick={(e)=>this.likeHandler(e,restId)} className='like-btn'>
                                        <span className="unfilled-heart"><i className="far fa-heart"></i></span>
                                        Like
                                    </button>     
                                )}
                           
                            </div>
                        </div>
                        
                        <div className='clear'></div>        
                    </Link>    
                </li>
            )
        });
        return(
            <div className='container'>
                <h2 className='heading-title'>Showing restaurants in: <b>{cityName}</b></h2>
                <ul className='resto-list'>
                    {restaurantList}
                </ul>
                <div id="listMoreLoader">
                    <Loader/>
                </div>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Listing))
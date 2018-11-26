import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
import './Listing.css'
import { get } from 'lodash';
import { withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

const count = 10;
class Listing extends Component{
    constructor(props){
        super(props);
        this.loadMoreResult = this.loadMoreResult.bind(this);
        this.intersectionCallback = this.intersectionCallback.bind(this);
    }

    componentDidMount() {
        debugger;
    
        const cityId = this.props.match.params.cityId;
        this.props.getRestaurantsData(0,count, parseInt(cityId, 10));
        // config that define root margin and threshlod 
        const options = {
            rootMargin: '100px',
            threshold: 1.0
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
            // const restaurant_Review = get(data, "restaurant.");
            return (
                <li key={index}>
                    <Link to={`/details/${restId}`}>
                        <img className='resto-image' src={imageURL}/>
                        <h4 className='resto-name'>{restaurant_Name}</h4>
                        <h3 className='locality'>{restaurant_locality}</h3>
                        <address className='address'>{restaurant_address}</address>
                        <div>
                            <span className='resto-rating'>
                                <i className="far fa-star"></i>
                                {restaurant_Rating}
                            </span>
                            <span className='resto-votes'>({restaurant_Votes} votes)</span>
                            {/* <span>{restaurant_Review}</span> */}
                        </div>
                        <div className='clear'></div>        
                    </Link>    
                </li>
            )
        });
        return(
            <div className='container'>
                <h2>Showing restaurants in:{cityName}</h2>
                <ul className='resto-list'>
                    {restaurantList}
                </ul>
                <div id="listMoreLoader">
                    Loading more results ...
                </div>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Listing))
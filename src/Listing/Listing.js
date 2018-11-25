import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
import './Listing.css'
import { get } from 'lodash';
class Listing extends Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        debugger;
        // this.props.getRestaurantsData();
    }

    render(){
        let restaurantList = this.props.restaurants.map((data,index)=>{
            const imageURL = get(data, "restaurant.featured_image");
            const restaurant_Name = get(data, "restaurant.name");
            const restaurant_Rating = get(data, "restaurant.user_rating.aggregate_rating");
            const restaurant_Votes = get(data, "restaurant.user_rating.votes");
            const restaurant_locality = get(data, "restaurant.location.locality_verbose");
            const restaurant_address = get(data, "restaurant.location.address");
            // const restaurant_Review = get(data, "restaurant.");
            return (
                <li key={index}>
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
                </li>
            )
        });
        return(
            <div>
                <h2>Showing restaurants in:"Bangaluru"</h2>
                <ul className='resto-list'>
                    {restaurantList}
                </ul>
               
            </div>
            
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Listing)
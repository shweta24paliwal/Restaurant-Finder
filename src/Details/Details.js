import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import { get } from 'lodash';
import './Details.css';

class Details extends Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        debugger;
        // this.props.getRestaurantDetails();
    }

    render(){
        let data = this.props.details;
            const imageURL = get(data, "featured_image");
            const restaurant_Name = get(data, "name");
            // const restaurant_Rating = get(data, "restaurant.user_rating.aggregate_rating");
            // const restaurant_Votes = get(data, "restaurant.user_rating.votes");
            // const restaurant_locality = get(data, "restaurant.location.locality_verbose");
            // const restaurant_address = get(data, "restaurant.location.address");
            // // const restaurant_Review = get(data, "restaurant.");
            // return (
            //     <li key={index}>
            //         <img className='resto-image' src={imageURL}/>
            //         <h4 className='resto-name'>{restaurant_Name}</h4>
            //         <h3 className='locality'>{restaurant_locality}</h3>
            //         <address className='address'>{restaurant_address}</address>
            //         <div>
            //             <span className='resto-rating'>
            //                 <i className="far fa-star"></i>
            //                 {restaurant_Rating}
            //             </span>
            //             <span className='resto-votes'>({restaurant_Votes} votes)</span>
            //             {/* <span>{restaurant_Review}</span> */}
            //         </div>
            //         <div className='clear'></div>
            //     </li>
            // )
        
        return(
            <div className='container'>
               <img className="details-img" src={imageURL}/>
                
            </div>
            
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Details)
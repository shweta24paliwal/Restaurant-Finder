import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
import { withRouter} from 'react-router-dom';
import superagent from "superagent";
import "./Home.css"
class Home extends Component{
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    componentDidMount(){
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
                debugger;
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                if(lat && lon){
                    this.getCityData(lat, lon);
                }
            })
        }
    }
    
    getCityData(lat, lon){
        superagent
        .get(`https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`)
        .set('user-key',"fa81a3f97323eba13d8713d3284b8556")
        .then(res =>{
            const city = res.body.location_suggestions[0].name;
            const cityId = res.body.location_suggestions[0].id;
            window.location.href = `/listing/${city}/${cityId}`;
        });
    }
    
    onClickHandler(city){
        superagent
            .get(`https://developers.zomato.com/api/v2.1/cities?q=${city}`)
            .set('user-key',"fa81a3f97323eba13d8713d3284b8556")
            .then(res =>{
                const cityId = res.body.location_suggestions[0].id;
                window.location.href = `/listing/${city}/${cityId}`;
            });
    }
    render(){
        const city = this.props.cities.map((cityName,index)=>{
            return (
                <li key={index} onClick={() => this.onClickHandler(cityName)}>
                    <button className='btn'>{cityName}</button>
                </li>
            )
        });
        return(
            <div class='container'>
            <div className='cityList-container container'>
            <h3 className='heading'>Select your City</h3>
                <ul className="cityList">
                   {city}
                </ul>
            </div>
               
            </div>
            
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Home))
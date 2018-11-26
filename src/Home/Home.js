import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
import { withRouter} from 'react-router-dom';
import superagent from "superagent";
class Home extends Component{
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
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
                <span key={index} onClick={() => this.onClickHandler(cityName)}>{cityName}</span>
            )
        });
        return(
            <div>
               <nav>
                   {city}
               </nav>
            </div>
            
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProp)(Home))
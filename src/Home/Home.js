import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
class Home extends Component{
    constructor(props){
        super(props);
        this.nameInput = this.nameInput.bind(this);
        this.ageInput = this.ageInput.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    nameInput(e){
        this.props.updateName(e.target.value);
    }
    ageInput(e){
        this.props.updateAge(e.target.value);
    }
    onClick(){
        this.props.showDetails();
    }
    render(){
        const city = this.props.cities.map((cityName,index)=>{
            return (
                <a key={index}>{cityName}</a>
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
export default connect(mapStateToProps, mapDispatchToProp)(Home)
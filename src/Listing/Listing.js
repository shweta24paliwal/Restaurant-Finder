import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
class Listing extends Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        this.props.getRestaurantsData();
    }

    render(){
        
        return(
            <div>
                <ul>
                    <li>
                        <img src=''/>
                        <h4></h4>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
               
            </div>
            
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Listing)
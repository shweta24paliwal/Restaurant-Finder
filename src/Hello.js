import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispatchToProp from './mapDispatchToProp';
import mapStateToProps from './mapStateToProp';
class Hello extends Component{
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
        return(
            <div>
                <input type='text' value={this.props.name} placeholder="name" onChange={(e) => this.nameInput(e)}/>
                <input type='text' value={this.props.age} placeholder="age" onChange={(e) => this.ageInput(e)}/>
                <button onClick={this.onClick}>Show Details</button><br/>
                { this.props.clicked &&
                    <p>
                        Name: {this.props.name}<br/>
                        Age: {this.props.age}
                    </p>
                }
            </div>
            
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Hello)
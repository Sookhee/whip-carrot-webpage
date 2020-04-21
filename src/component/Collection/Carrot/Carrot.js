import React, {Component} from 'react';
import Popup from './PopUp';
import './Carrot.scss';

class Carrot extends Component{

    constructor(props){
        super(props);
            this.state = {
                showPopup: false
            };
        }
      
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
       }
       
    render(){
        return(
        <div className="container">
            <div className="carrot" onClick={this.togglePopup.bind(this)}>
                <img src={this.props.img}></img>
                <h3>{this.props.name}</h3>
                {this.state.showPopup ? 
                    <Popup closePopup={this.togglePopup.bind(this)} name={this.props.name} img={this.props.img}/>  
                    : null
                }{console.log(this)}
            </div>
        </div> 
        );
    };
}




export default Carrot;